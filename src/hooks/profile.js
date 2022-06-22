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


