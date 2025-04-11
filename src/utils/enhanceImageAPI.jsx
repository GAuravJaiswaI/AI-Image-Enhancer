import axios from "axios";

const API_KEY = "wxfbyckwupscddy5a";
const BASE_URL = "https://techhk.aoscdn.com";
const MAXIMUM_RETRIES = 20; // Maximum number of retries for polling


export const enhanceImageAPI = async (file) => {
  try {
    console.log("Enhancing image...");
    const taskId = await uploadImage(file);
    console.log("Image Uploaded successfully, Task ID", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data", enhancedImageData);

    return enhancedImageData; // Return only the image property
  } catch (error) {
    console.error("Error enhancing image:", error.message); // Fixed typo
  
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
    headers: {
      "Content-type": "multipart/form-data",
      "X-API-Key": API_KEY,
    },
  });

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image, Task ID not found.");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
    headers: {
      "X-API-Key": API_KEY,
    },
  });

 
  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image, image not found.");
  }

  return data.data;
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result?.state === 4) {
    console.log('Processing...(${retries}/${MAXIMUM_RETRIES})');

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Maximum retries reached. Please try again later.");
    }

    // Wait for 2 seconds before retrying
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced image URL:", result);
  return result;
};