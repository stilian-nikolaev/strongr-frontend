import { createExercise } from "../service/restRequests";

export function useCreateExercise(workoutId, data) {
    return createExercise(workoutId, data);
}