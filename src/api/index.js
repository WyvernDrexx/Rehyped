import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.43.138:8000",
  responseType: "json"
});
