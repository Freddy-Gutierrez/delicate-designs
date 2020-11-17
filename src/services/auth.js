import http from "./http";
import jwtDecode from "jwt-decode";
import { toast } from 'react-toastify';

const tokenKey = "token";

export async function login(username, password) {
  await http
    .post("/users/login", {
      username,
      password,
    })
    .then((res) => 
    {
      localStorage.setItem(tokenKey, res.headers["x-auth-token"]);
      window.location = "/"
    })
    .catch((error) => toast.error(error.response.data));
}

export async function signup(username, password) {
  await http
    .post("/users/signup", {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem(tokenKey, res.headers["x-auth-token"]);
      window.location = "/";
    })
    .catch((err) => toast.error(err.response.data));
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem('cart');
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
