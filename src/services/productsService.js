import axios from 'axios';
import config from "../config.json"
let endpoint = config.productsUrl;

export function getBanners(productDirectory){
    return axios.get(endpoint+productDirectory).then(response => response.data)
}

export function getPillows(productDirectory){
    return axios.get(endpoint+productDirectory).then(response => response.data)
}

export function getShirts(productDirectory){
    return axios.get(endpoint+productDirectory).then(response => response.data)
}

export function getToppers(productDirectory){
    return axios.get(endpoint+productDirectory).then(response => response.data)
}

export function getTotes(productDirectory){
    return axios.get(endpoint+productDirectory).then(response => response.data)
}

export function getTumblers(productDirectory){
    return axios.get(endpoint+productDirectory).then(response => response.data)
}