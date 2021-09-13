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
}

export default new AuthenticationService();