import { useQuery } from "react-query";
import { apiClient } from "../service/apiClient";

import { endpoints } from "../service/apiEndpoints";

export function useWorkout(id) {
    async function fetchWorkout() {
        const res = await apiClient.get(endpoints.workouts.one(id).url);
        return res.data;
    }

    return useQuery(endpoints.workouts.one(id).url, fetchWorkout);
}

export function useWorkouts() {
    async function fetchWorkouts() {
        const res = await apiClient.get(endpoints.workouts.all().url);
        return res.data;
    }

    return useQuery(endpoints.workouts.all().url, fetchWorkouts);
}

export async function useCreateWorkout(data) {
    const res = await apiClient.post(endpoints.workouts.all().url, data);
    return res.data;
}

export async function useEditWorkout(id, data) {
    const res = await apiClient.patch(endpoints.workouts.one(id).url, data);
    return res.data;
}

export async function useDeleteWorkout(id) {
    const res = await apiClient.delete(endpoints.workouts.one(id).url);
    return res.data;
}
