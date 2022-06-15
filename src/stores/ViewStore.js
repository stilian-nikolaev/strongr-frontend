import { makeObservable, observable, action } from "mobx"

class ViewStoreImpl {
    view = 'workouts'
    editingTitle = false
    addingExercise = false
    addingWorkout = false

    constructor() {
        makeObservable(this, {
            view: observable,
            setView: action,
            editingTitle: observable,
            toggleEditingTitle: action,
            addingExercise: observable,
            toggleAddingExercise: action,
            addingWorkout: observable,
            toggleAddingWorkout: action,
        })
    }

    setView = value => {
        this.view = value
    }

    toggleEditingTitle = () => {
        this.editingTitle = !(this.editingTitle)
    }

    toggleAddingExercise = () => {
        this.addingExercise = !(this.addingExercise)
    }

    toggleAddingWorkout = () => {
        this.addingWorkout = !(this.addingWorkout)
    }
}

export const ViewStore = new ViewStoreImpl();