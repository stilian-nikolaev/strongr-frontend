import { makeObservable, observable, action } from "mobx"

function retrieveStoredToken() {
    const storedToken = localStorage.getItem('token')
    const storedExpiresAt = localStorage.getItem('expiresAt')

    const remainingTime = storedExpiresAt - Date.now()

    if (remainingTime <= 60000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expiresAt')
        return null;
    }

    return { token: storedToken, remainingTime }
}

class AuthStoreImpl {
    tokenData = retrieveStoredToken()
    token = this.tokenData && this.tokenData.token
    isAuthenticated = !!(this.token)
    logoutTimer = null

    constructor() {
        makeObservable(this, {
            token: observable,
            isAuthenticated: observable,
            login: action,
            logout: action,
        })

        if (this.tokenData) {
            this.logoutTimer = setTimeout(this.logout, this.tokenData.remainingTime)
        }
    }

    login = (token, expiresAt) => {
        this.token = token;
        this.isAuthenticated = true;

        localStorage.setItem('token', token)
        localStorage.setItem('expiresAt', expiresAt)

        const remainingTime = expiresAt - Date.now();

        this.logoutTimer = setTimeout(this.logout, remainingTime)
    }

    logout = () => {
        this.token = null
        this.isAuthenticated = false;

        localStorage.removeItem('token')
        localStorage.removeItem('expiresAt')

        clearTimeout(this.logoutTimer)
    }
}

export const AuthStore = new AuthStoreImpl();