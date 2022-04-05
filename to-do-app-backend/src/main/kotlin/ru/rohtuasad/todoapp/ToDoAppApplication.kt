package ru.rohtuasad.todoapp

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import ru.rohtuasad.securityutils.annotations.EnableSecurityUtils

@SpringBootApplication
@EnableSecurityUtils
class ToDoAppApplication

fun main(args: Array<String>) {
    runApplication<ToDoAppApplication>(*args)
}
