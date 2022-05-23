import { makeObservable, observable, action } from "mobx"

class WorkoutStoreImpl {
    workoutId = null
    title = ''

    constructor() {
        makeObservable(this, {
            workoutId: observable,
            setWorkoutId: action,
            title: observable,
            setTitle: action,
        })
    }

    setWorkoutId = value => {
        this.workoutId = value
    }

    setTitle = value => {
        this.title = value
    }
}

export const WorkoutStore = new WorkoutStoreImpl();