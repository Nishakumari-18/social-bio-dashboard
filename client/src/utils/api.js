import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api/users" });

export const saveUser = (data) => API.post("/save", data);
export const getUser = (username) => API.get(`/${username}`);
