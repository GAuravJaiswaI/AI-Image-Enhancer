// Application Constants

export const APP_NAME = "AI Image Enhancer";
export const APP_VERSION = "1.0.0";

// API Configuration
export const API_ENDPOINTS = {
  UPLOAD: "/api/tasks/visual/scale",
  STATUS: (taskId: string) => `/api/tasks/visual/scale/${taskId}`,
} as const;

// File Upload Constants
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

// Polling Constants
export const POLLING_INTERVAL = 2000; // 2 seconds
export const MAX_POLLING_RETRIES = 20;

// UI Constants
export const ANIMATION_DURATION = 0.5;
export const DEBOUNCE_DELAY = 300;

