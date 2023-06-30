import axios from "axios";

const api = axios.create({
  baseURL: "https://test.relabs.ru"
});

export default api;