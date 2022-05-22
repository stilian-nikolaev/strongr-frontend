import { useQuery } from "react-query";

import { endpoints } from "../service/apiEndpoints";
import { fetchWorkouts, fetchWorkout, createWorkout, editWorkout, deleteWorkout } from "../service/restRequests";


export function useWorkout(id) {
    return useQuery(endpoints.workouts.one(id).url, () => fetchWorkout(id));
}

export function useWorkouts() {
    return useQuery(endpoints.workouts.all.url, fetchWorkouts);
}

export function useCreateWorkout() {
    return createWorkout;
}

export function useEditWorkout(id, data) {
    return editWorkout(id, data);
}

export function useDeleteWorkout(id) {
    return deleteWorkout(id);
}
