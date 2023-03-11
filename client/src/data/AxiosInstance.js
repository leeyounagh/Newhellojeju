import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default AxiosInstance;
