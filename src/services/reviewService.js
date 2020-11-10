import axios from 'axios';
import config from "../config.json"
import { toast } from "react-toastify";
import { getJwt } from "./auth";

let endpoint = config.reviewsURL;
const axiosConfig = { headers: { "x-auth-token": getJwt() } };


export function getReviews(productId){
    return axios.get(endpoint + "/" + productId).then((response) => response.data);
}

export function addReview(productId, rating, review){
    return axios.post(endpoint + "/" + productId,
        {rating, review},
        axiosConfig
        )
        .then((response) => window.location = "/reviews/" + productId)
        .catch((error) => toast.error(error.response.data));
}

export function getFilteredReviews(productId, rating){
    return axios.get(endpoint+ "/" + productId + "/" + rating).then((response) => response.data);
}

export function updateHelpful(reviewId){
    return axios.put(endpoint + "/helpful/" + reviewId, null, axiosConfig)
        .then((response) => response.data)
        .catch(error => null);
}

