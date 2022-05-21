import { makeObservable, observable, action } from "mobx"

class ViewStoreImpl {
    view = 'workouts'

    constructor() {
        makeObservable(this, {
            view: observable,
            setView: action,
        })
    }

    setView = value => {
        this.view = value
    }
}

export const ViewStore = new ViewStoreImpl();