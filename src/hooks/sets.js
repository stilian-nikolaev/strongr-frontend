import { createSet, editSet } from "../service/restRequests";

export function useCreateSet(workoutId, exerciseId, data) {
    return createSet(workoutId, exerciseId, data);
}

export function useEditSet(workoutId, exerciseId, setId, data) {
    return editSet(workoutId, exerciseId, setId, data);
}