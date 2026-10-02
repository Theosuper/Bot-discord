import { API_Routes } from "./api-routes";
import apiRequest from "./axios";

export const loginIntoApp = (data: { login: string; password: string }) => {
  return apiRequest.post(API_Routes.AUTH.LOGIN, data);
};
