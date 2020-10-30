import axios from 'axios';
import config from "../config.json"
let endpoint = config.reviewsURL;

export function getReviews(productId){
    return axios.get(endpoint+"/"+productId).then(response => response.data);
}

export function getFilteredReviews(productId, rating){
    return axios.get(endpoint+"/"+productId+"/"+rating).then(response => response.data);
}

