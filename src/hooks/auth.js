import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";

export async function useLoginUser(data) {
    const res = await apiClient.post(endpoints.auth.login().url, data);
    return res.data;
}

export async function useRegisterUser(data) {
    const res = await apiClient.post(endpoints.auth.register().url, data);
    return res.data;
}