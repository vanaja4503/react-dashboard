import { apiRequest } from "./api";

export function getUsers() {
  return apiRequest("/users");
}