import { makeObservable, observable, action } from "mobx"

class ViewStoreImpl {
    view = 'workouts'
    editingTitle = false

    constructor() {
        makeObservable(this, {
            view: observable,
            setView: action,
            editingTitle: observable,
            toggleEditingTitle: action,
        })
    }

    setView = value => {
        this.view = value
    }

    toggleEditingTitle = () => {
        this.editingTitle = !(this.editingTitle)
    }
}

export const ViewStore = new ViewStoreImpl();