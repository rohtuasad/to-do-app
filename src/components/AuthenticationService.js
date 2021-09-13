class AuthenticationService {
    registerSuccessLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
    }
}

export default new AuthenticationService();