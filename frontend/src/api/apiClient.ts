import axios, { AxiosError } from 'axios';
import { baseURL } from './baseUrl';

export default function apiClient(){
    
    let token = localStorage.getItem("token");
    console.log(token)
    let apiClient = axios.create({
        baseURL: baseURL, 
        headers: {Authorization: `Bearer ${token}`}
    });

    const verify = async () => {
        await apiClient.get(`${baseURL}/api/auth/verify`)
            .then((res) => {})
            .catch((err: AxiosError) => {
                localStorage.removeItem("token");
                window.location.reload()
            })
    }
    verify()

    return apiClient;
};
