import axios from "axios";
import { AuthStore } from "../stores/AuthStore";

const API_URL = 'http://localhost:5000'
//should not be here

const { token } = AuthStore;

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})