import { makeObservable, observable, action } from "mobx"

class ViewStoreImpl {
    avatarId = null
    avatarColor = 'white'
    themeColor = 0
    editingTitle = false
    addingExercise = false
    addingWorkout = false

    constructor() {
        makeObservable(this, {
            themeColor: observable,
            setThemeColor: action,
            avatarId: observable,
            setAvatarId: action,
            avatarColor: observable,
            setAvatarColor: action,
            editingTitle: observable,
            toggleEditingTitle: action,
            addingExercise: observable,
            toggleAddingExercise: action,
            addingWorkout: observable,
            toggleAddingWorkout: action,
        })
    }

    setThemeColor = (index) => {
        this.themeColor = index
    }

    setAvatarId = (id) => {
        this.avatarId = id
    }

    setAvatarColor = (color) => {
        this.avatarColor = color
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