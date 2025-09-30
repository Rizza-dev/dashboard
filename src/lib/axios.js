import axios from "axios";

const api = axios.create({
  baseURL: "/admin/api", 
});

export default api;