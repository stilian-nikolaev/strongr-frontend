import axios from "axios";

const API_URL = 'http://localhost:5000'
//should not be here

export const apiClient = axios.create({ baseURL: API_URL })