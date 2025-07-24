import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  withCredentials: true,
});

export const authenticateAPI = (token: string) =>
  API.post("/user/authenticate", {}, { headers: { "Authorization": token }});


export const fetchLoggedUserAPI = (token : string) => 
  API.get(`/user/get-login-status/${token}`)

export const fetchVideoSuggestionAPI = (query : string) => 
  API.get(`/video/get-video-suggestion/${query}`)

