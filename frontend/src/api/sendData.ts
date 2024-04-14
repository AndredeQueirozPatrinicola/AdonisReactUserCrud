import apiClient from "./apiClient";
import { baseURL } from "./baseUrl";

export const sendData = (url:string, body:{}={}) => {
    return apiClient().post(`${baseURL}${url}`, body)
}