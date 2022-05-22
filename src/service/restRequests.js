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

export async function createWorkout(data) {
    const res = await apiClient.post(endpoints.workouts.all.url, data);
    return res.data;
}

export async function createExercise(workoutId, data) {
    const res = await apiClient.post(endpoints.exercises.all(workoutId).url, data);
    return res.data;
}

export async function createSet(workoutId, exerciseId, data) {
    const res = await apiClient.post(endpoints.sets.all([workoutId, exerciseId]).url, data);
    return res.data;
}

export async function deleteExercise(workoutId, exerciseId) {
    const res = await apiClient.delete(endpoints.exercises.one([workoutId, exerciseId]).url);
    return res.data;
}

export async function editWorkout (workoutId, data) {
    const res = await apiClient.patch(endpoints.workouts.one(workoutId).url, data);
    return res.data;
}

export async function deleteWorkout (id) {
    const res = await apiClient.delete(endpoints.workouts.one(id).url);
    return res.data;
}
