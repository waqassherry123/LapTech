import axios from "axios";

//base url
const baseURL = 'http://ec2-54-176-7-27.us-west-1.compute.amazonaws.com/api2/';

export default class api {
    static login (data) {
        return axios.post(`${baseURL}user/login_v2`,data)
    }

    static signup (data) {
        return axios.post(`${baseURL}user/signup`,data)
    }
}