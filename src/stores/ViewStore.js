import { makeObservable, observable, action } from "mobx"

class ViewStoreImpl {
    avatarId = null
    editingTitle = false
    addingExercise = false
    addingWorkout = false

    constructor() {
        makeObservable(this, {
            avatarId: observable,
            setAvatarId: action,
            editingTitle: observable,
            toggleEditingTitle: action,
            addingExercise: observable,
            toggleAddingExercise: action,
            addingWorkout: observable,
            toggleAddingWorkout: action,
        })
    }

    setAvatarId = (id) => {
        this.avatarId = id
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