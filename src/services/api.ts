import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const MAXIMUM_RETRIES = parseInt(import.meta.env.VITE_MAX_RETRIES || "20", 10);

// Validate environment variables
if (!API_KEY || !BASE_URL) {
  console.error("Missing required environment variables: VITE_API_KEY or VITE_API_BASE_URL");
}

// Create axios instance with default config
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-Key": API_KEY,
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// Image Enhancement API
export const enhanceImageAPI = async (file: File) => {
  try {
    console.log("Enhancing image...");
    const taskId = await uploadImage(file);
    console.log("Image Uploaded successfully, Task ID", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data", enhancedImageData);

    return enhancedImageData;
  } catch (error: any) {
    console.error("Error enhancing image:", error.message);
    throw error;
  }
};

const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await api.post("/api/tasks/visual/scale", formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image, Task ID not found.");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId: string) => {
  const { data } = await api.get(`/api/tasks/visual/scale/${taskId}`);

  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image, image not found.");
  }

  return data.data;
};

const PollForEnhancedImage = async (taskId: string, retries = 0): Promise<any> => {
  const result = await fetchEnhancedImage(taskId);

  if (result?.state === 4) {
    console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Maximum retries reached. Please try again later.");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced image URL:", result);
  return result;
};

