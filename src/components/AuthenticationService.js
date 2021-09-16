class AuthenticationService {
    registerSuccessLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        return sessionStorage.getItem('authenticatedUser') != null
    }

    getLoggedInUser() {
        let user =  sessionStorage.getItem('authenticatedUser')
        return user === null ? '' : user
    }
}

export default new AuthenticationService();