package ru.rohtuasad.todoapp.bootstrap

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.context.event.ContextRefreshedEvent
import org.springframework.stereotype.Component
import ru.rohtuasad.securityutils.user.model.User
import ru.rohtuasad.securityutils.user.repository.UserRepository
import ru.rohtuasad.securityutils.user.service.UserService
import ru.rohtuasad.todoapp.model.Todo
import ru.rohtuasad.todoapp.repository.TodoRepository
import java.time.LocalDate
import java.util.*

@Component
class DevBootstrap
@Autowired
constructor(private val userService: UserService, private val todoRepository: TodoRepository) :
    ApplicationListener<ContextRefreshedEvent> {
    override fun onApplicationEvent(p0: ContextRefreshedEvent) {
        val user = User("Name", "login1", "user1@user.com")
        user.password = "password"
        userService.registerUser(user)
        todoRepository.save(Todo("Learn React", LocalDate.now(), false, user.login))
        todoRepository.save(Todo("Become expert in React", LocalDate.now(), false, user.login))
        todoRepository.save(Todo("Visit India", LocalDate.now(), false, user.login))
    }
}
