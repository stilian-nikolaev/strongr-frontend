import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";
import { createSet, editSet } from "../service/restRequests";

export function useCreateSet(workoutId, exerciseId, data) {
    return createSet(workoutId, exerciseId, data);
}

export function useEditSet(workoutId, exerciseId, setId, data) {
    return editSet(workoutId, exerciseId, setId, data);
}

export async function useDeleteSet(workoutId, exerciseId, setId) {
    const res = await apiClient.delete(endpoints.sets.one([workoutId, exerciseId, setId]).url);
    return res.data;
}

