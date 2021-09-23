import axios from "axios"

class AuthenticationService {

    executeBasicAuthentication(username, password) {
        return axios.get('http://localhost:8080/basicauth', {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    registerSuccessLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptor(username, password)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        return sessionStorage.getItem('authenticatedUser') != null
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem('authenticatedUser')
        return user === null ? '' : user
    }

    setupAxiosInterceptor(username, password) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = this.createBasicAuthToken(username, password)
                }
                return config
            }
        )
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(`${username}:${password}`)
    }
}

export default new AuthenticationService();