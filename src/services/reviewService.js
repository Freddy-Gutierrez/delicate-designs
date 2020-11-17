import http from './http';
import { toast } from "react-toastify";
import { getJwt } from "./auth";

const axiosConfig = { headers: { "x-auth-token": getJwt() } };


export function getReviews(productId){
    return http.get("/reviews/" + productId).then((response) => response.data);
}

export function addReview(productId, rating, review){
    return http.post("/reviews/" + productId,
        {rating, review},
        axiosConfig
        )
        .then((response) => window.location = "/reviews/" + productId)
        .catch((error) => toast.error(error.response.data));
}

export function getFilteredReviews(productId, rating){
    return http.get("/reviews/" + productId + "/" + rating).then((response) => response.data);
}

export function updateHelpful(reviewId){
    return http.put("/reviews/helpful/" + reviewId, null, axiosConfig)
        .then((response) => response.data)
        .catch(error => null);
}

