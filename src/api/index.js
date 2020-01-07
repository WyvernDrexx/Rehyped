import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "http://rehyped.com:5000";

    
export default axios.create({
  baseURL,
  responseType: "json"
});
