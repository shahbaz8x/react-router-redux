import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/v1/";
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};
const login = (pid, password) => {
  return axios
    .post(API_URL + "employee/login", {
      pid,
      password,
    })
    .then((response) => {
      if (response.data) { // if(response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};