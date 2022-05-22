import { createExercise, deleteExercise } from "../service/restRequests";

export function useCreateExercise(workoutId, data) {
    return createExercise(workoutId, data);
}

export function useDeleteExercise(workoutId, exerciseId) {
    return deleteExercise(workoutId, exerciseId);
}