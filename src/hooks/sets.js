import { createSet } from "../service/restRequests";

export function useCreateSet(workoutId, exerciseId, data) {
    return createSet(workoutId, exerciseId, data);
}