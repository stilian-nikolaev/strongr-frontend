import { makeObservable, observable, action } from "mobx"

class ViewStore {
    view = 'workouts'

    constructor() {
        makeObservable(this, {
            view: observable,
            setView: action,
        })
    }

    setView(value) {
        this.view = value
    }
}