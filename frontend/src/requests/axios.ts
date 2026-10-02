import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8080",
});

apiRequest.interceptors.response.use((response) => {
  return response.data;
});
export default apiRequest;
