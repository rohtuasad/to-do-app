package ru.rohtuasad.todoapp.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.security.core.userdetails.UserDetails
import ru.rohtuasad.todoapp.model.User
import java.util.*

interface UserRepository : CrudRepository<User, UUID> {
    fun findByName(username: String): UserDetails
}
