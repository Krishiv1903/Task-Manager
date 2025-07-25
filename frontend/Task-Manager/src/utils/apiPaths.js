export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", // new users (Admin or member)
        LOGIN: "/api/auth/login", // Authenticate user and return JWT token
        GET_PROFILE: "/api/auth/profile", // Logged in user details
    },

    USERS: {
        GET_ALL_USERS: "/api/users", // all users (admin only)
        GET_USERS_BY_ID: (userId) => `/api/users/${userId}`, // get user by id
        CREATE_USER: "/api/users", // create new user
        UPDATE_USER: (userId) => `/api/users/${userId}`,
        DELETE_USER: (userId) => `/api/users/${userId}`,
    },

    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get Dashboard Data
        GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get User Dashboard data
        GET_ALL_TASKS: "/api/tasks", // Get all tasks (Admin: all, User: only assigned
        GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, // Get task by ID
        CREATE_TASK: "/api/tasks", // Create a new task (Admin only)
        UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task details
        DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete a task (Admin only)

        UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`,
        UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`,
    },

    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks", // download as excel
        EXPORT_USERS: "/api/reports/export/users", // download user-task report
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image",
    },
};