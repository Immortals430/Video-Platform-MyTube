import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
});

export const authenticateAPI = (token: string) =>
  API.post("/user/login", {}, { headers: { "Authorization": token }});
