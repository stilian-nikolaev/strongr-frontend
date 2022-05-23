import { makeObservable, observable, action } from "mobx"

class ModalStoreImpl {
    open = false
    content = ''
    callback = () => {}

    constructor() {
        makeObservable(this, {
            open: observable,
            openModal: action,
            closeModal: action,
            content: observable,
            setContent: action,
            callback: observable,
            setCallback: action,
        })
    }

    openModal = () => {
        this.open = true;
    }

    closeModal = () => {
        this.open = false;
    }

    setContent = value => {
        this.content = value;
    }

    setCallback = func => {
        this.callback = func;
    }
}

export const ModalStore = new ModalStoreImpl();