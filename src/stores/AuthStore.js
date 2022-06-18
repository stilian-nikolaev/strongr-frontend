import { makeObservable, observable, action } from "mobx"

class AuthStoreImpl {
    token = localStorage.getItem('token')
    isAuthenticated = !!(this.token)

    constructor() {
        makeObservable(this, {
            token: observable,
            isAuthenticated: observable,
            login: action,
            logout: action,
        })
    }

    login = (token) => {
        this.token = token;
        this.isAuthenticated = true;
    }

    logout = () => {
        this.token = null
        this.isAuthenticated = false;
    }
}

export const AuthStore = new AuthStoreImpl();