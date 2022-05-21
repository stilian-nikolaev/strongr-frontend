import { makeObservable, observable, action } from "mobx"

class WorkoutStoreImpl {
    workoutId = null

    constructor() {
        makeObservable(this, {
            workoutId: observable,
            setWorkoutId: action,
        })
    }

    setWorkoutId = value => {
        this.workoutId = value
    }
}

export const WorkoutStore = new WorkoutStoreImpl();