import axios from "axios";
import { AuthStore } from "../stores/AuthStore";

const API_URL = 'https://api-strongr.herokuapp.com/'
const { token } = AuthStore;

export const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})