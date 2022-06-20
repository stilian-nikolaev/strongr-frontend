import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";

export async function useCreateSet(workoutId, exerciseId, data) {
    const res = await apiClient.post(endpoints.sets.all([workoutId, exerciseId]).url, data);
    return res.data;
}

export async function useEditSet(workoutId, exerciseId, setId, data) {
    const res = await apiClient.put(endpoints.sets.one([workoutId, exerciseId, setId]).url, data);
    return res.data;
}

export async function useDeleteSet(workoutId, exerciseId, setId) {
    const res = await apiClient.delete(endpoints.sets.one([workoutId, exerciseId, setId]).url);
    return res.data;
}

