import axios from 'axios';
import http from "./http";
import config from "../config.json";
import jwtDecode from "jwt-decode";
import { toast } from 'react-toastify';

const endpoint = config.usersURL;
const tokenKey = "token";

// http.setJwt(getJwt());

export async function login(username, password) {
  await axios
    .post(endpoint + "/login", {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem(tokenKey, res.headers["x-auth-token"]);      
    })
    .catch((error) => toast.error(error.response.data));
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  return localStorage.getItem("token");
}

export function getCurrentUser() {
  // if you have a valid json token
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
