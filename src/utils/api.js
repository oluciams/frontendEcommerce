import axios from "axios";

export const loginApi = axios.create({
    baseURL: 'http://localhost:3001',
    //baseURL: 'https://ancient-brook-80759.herokuapp.com',
    //baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
});

export const productsApi= axios.create({
    baseURL: 'http://localhost:3001',
    //baseURL:'https://ancient-brook-80759.herokuapp.com',
    //baseURL: process.env.REACT_APP_API_URL,
    timeout:5000
})

export const signupApi= axios.create({
    baseURL: 'http://localhost:3001',
    //baseURL:'https://ancient-brook-80759.herokuapp.com',
    //baseURL: process.env.REACT_APP_API_URL,
    timeout:5000
})
