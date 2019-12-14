import axios from 'axios';

export default axios.create({
    baseURL: "https://rehyped-test-server.herokuapp.com",
    responseType: "json"
});