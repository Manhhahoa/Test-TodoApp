import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.35:3001",
});

export default instance;
