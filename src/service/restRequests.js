import { apiClient } from "./apiClient";
import { endpoints } from "./apiEndpoints";

export async function fetchWorkout(id) {
    const res = await apiClient.get(endpoints.workouts.one(id).url);
    return res.data;
}

export async function fetchWorkouts() {
    const res = await apiClient.get(endpoints.workouts.all.url);
    return res.data;
}