import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Hàm để cấu hình gửi kèm AccessToken
export const setAccessToken = (token) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
