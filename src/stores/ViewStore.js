import { makeObservable, observable, action } from "mobx"

class ViewStoreImpl {
    editingTitle = false
    addingExercise = false
    addingWorkout = false

    constructor() {
        makeObservable(this, {
            editingTitle: observable,
            toggleEditingTitle: action,
            addingExercise: observable,
            toggleAddingExercise: action,
            addingWorkout: observable,
            toggleAddingWorkout: action,
        })
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