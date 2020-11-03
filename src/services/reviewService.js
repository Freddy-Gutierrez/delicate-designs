import axios from 'axios';
import config from "../config.json"
import { getJwt } from "./auth";

let endpoint = config.reviewsURL;
const axiosConfig = { headers: { "x-auth-token": getJwt() } };


export function getReviews(productId){
    return axios.get(endpoint + "/" + productId).then(response => response.data);
}

export function getFilteredReviews(productId, rating){
    return axios.get(endpoint+ "/" + productId + "/" + rating).then(response => response.data);
}

export function updateHelpful(reviewId){
    return axios.put(endpoint + "/helpful/" + reviewId, null, axiosConfig)
        .then(response => response.data)
        .catch(error => null);
}

