import axios from "axios";
    
export default axios.create({
  baseURL: process.env.REACT_APP_SRC_URL,
  responseType: "json"
});
