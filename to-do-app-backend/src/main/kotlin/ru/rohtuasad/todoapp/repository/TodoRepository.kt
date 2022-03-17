package ru.rohtuasad.todoapp.repository

import org.springframework.data.repository.CrudRepository
import ru.rohtuasad.todoapp.model.Todo
import java.util.*

interface TodoRepository : CrudRepository<Todo, UUID> {
    fun findAllByUserName(username: String): List<Todo>
}