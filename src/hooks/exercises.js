import { apiClient } from "../service/apiClient";
import { endpoints } from "../service/apiEndpoints";

export async function useCreateExercise(workoutId, data) {
    const res = await apiClient.post(endpoints.exercises.all(workoutId).url, data);
    return res.data;
}

export async function useDeleteExercise(workoutId, exerciseId) {
    const res = await apiClient.delete(endpoints.exercises.one([workoutId, exerciseId]).url);
    return res.data;
}