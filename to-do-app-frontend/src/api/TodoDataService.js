import axios from "axios"

class TodoDataService {
  retrieveAllTodos(username) {
    return axios.get(`http://localhost:8081/users/${username}/todos`)
  }

  retrieveTodo(username, id) {
    return axios.get(`http://localhost:8081/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo) {
    return axios.put(`http://localhost:8081/users/${username}/todos/${id}`,
        todo)
  }

  createTodo(username, todo) {
    return axios.post(`http://localhost:8081/users/${username}/todos`, todo)
  }

  deleteTodo(username, id) {
    return axios.delete(`http://localhost:8081/users/${username}/todos/${id}`)
  }

  registerUser(user) {
    return axios.post(`http://localhost:8081/v1/user/registration`, user)
  }
}

export default new TodoDataService()