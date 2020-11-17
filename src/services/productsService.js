import http from './http';

export function getBanners(productDirectory){
    return http.get("/products/" + productDirectory).then(response => response.data)
}

export function getPillows(productDirectory){
    return http.get("/products/" + productDirectory).then(response => response.data)
}

export function getShirts(productDirectory){
    return http.get("/products/" + productDirectory).then(response => response.data)
}

export function getToppers(productDirectory){
    return http.get("/products/" + productDirectory).then(response => response.data)
}

export function getTotes(productDirectory){
    return http.get("/products/" + productDirectory).then(response => response.data)
}

export function getTumblers(productDirectory){
    return http.get("/products/" + productDirectory).then(response => response.data)
}