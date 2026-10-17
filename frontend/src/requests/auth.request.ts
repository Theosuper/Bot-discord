import { API_Routes } from "./api-routes";
import apiRequest from "./axios";

export const loginIntoApp = (data: { email: string; password: string }) => {
  return apiRequest.post(API_Routes.AUTH.LOGIN, data);
};
export const registerIntoApp = (data: {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}) => {
  return apiRequest.post(API_Routes.AUTH.REGISTER, data);
};
