import apiClient from "./apiClient";
import { baseURL } from "./baseUrl";

export const fetchData = (url:string) => {
    return apiClient().get(`${baseURL}${url}`)
}