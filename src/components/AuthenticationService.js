class AuthenticationService {
    registerSuccessLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }
}

export default new AuthenticationService();