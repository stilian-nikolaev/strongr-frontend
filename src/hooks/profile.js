import { useQuery } from "react-query";
import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";

export function useProfile() {
    async function fetchProfile() {
        const res = await apiClient.get(endpoints.profile.one().url);
        return res.data;
    }
    return useQuery(endpoints.profile.one().url, fetchProfile);
}

export async function useEditProfile(data) {
    const res = await apiClient.patch(endpoints.profile.one().url, data);
    return res.data;
}

export async function useDeleteProfile() {
    const res = await apiClient.delete(endpoints.profile.one().url);
    return res.data;
}


