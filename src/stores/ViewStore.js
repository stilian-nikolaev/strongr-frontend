import { makeObservable, observable, action } from "mobx"

class ViewStoreImpl {
    view = 'workouts'
    editingTitle = false
    addingExercise = false

    constructor() {
        makeObservable(this, {
            view: observable,
            setView: action,
            editingTitle: observable,
            toggleEditingTitle: action,
            addingExercise: observable,
            toggleAddingExercise: action,
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
}

export const ViewStore = new ViewStoreImpl();