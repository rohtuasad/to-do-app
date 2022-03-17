package ru.rohtuasad.todoapp.bootstrap

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.context.event.ContextRefreshedEvent
import org.springframework.stereotype.Component
import ru.rohtuasad.todoapp.model.Todo
import ru.rohtuasad.todoapp.model.User
import ru.rohtuasad.todoapp.repository.TodoRepository
import ru.rohtuasad.todoapp.repository.UserRepository
import java.time.LocalDate
import java.util.*

@Component
class DevBootstrap
@Autowired
constructor(private val userRepository: UserRepository, private val todoRepository: TodoRepository) :
    ApplicationListener<ContextRefreshedEvent> {
    override fun onApplicationEvent(p0: ContextRefreshedEvent) {
        val user = userRepository.save(User("Name", "username", "password", "user@user.com"))
        todoRepository.save(Todo("Learn React", LocalDate.now(), false, user.login))
        todoRepository.save(Todo("Become expert in React", LocalDate.now(), false, user.login))
        todoRepository.save(Todo("Visit India", LocalDate.now(), false, user.login))
    }
}
