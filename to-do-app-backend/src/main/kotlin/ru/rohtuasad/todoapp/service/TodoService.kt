package ru.rohtuasad.todoapp.service

import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import ru.rohtuasad.todoapp.model.Todo
import ru.rohtuasad.todoapp.repository.TodoRepository
import java.util.*

@Service
class TodoService(val todoRepository: TodoRepository) {
    fun findAll(username: String): List<Todo> {
        return todoRepository.findAllByUserName(username)
    }

    fun deleteById(id: UUID) {
        todoRepository.deleteById(id)
    }

    fun findById(id: UUID): Todo? {
        return todoRepository.findByIdOrNull(id)
    }

    fun saveTodo(todo: Todo): Todo {
        return todoRepository.save(todo)
    }
}
