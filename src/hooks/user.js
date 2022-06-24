import { useQuery } from "react-query";
import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";

export function useUser() {
    async function fetchUser() {
        const res = await apiClient.get(endpoints.user.one().url);
        return res.data;
    }
    return useQuery(endpoints.user.one().url, fetchUser);
}

export async function useEditUser(data) {
    const res = await apiClient.patch(endpoints.user.one().url, data);
    return res.data;
}

export async function useDeleteUser() {
    const res = await apiClient.delete(endpoints.user.one().url);
    return res.data;
}


