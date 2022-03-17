package ru.rohtuasad.todoapp.service

import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service
import ru.rohtuasad.todoapp.repository.UserRepository

@Service
class UserDetailServiceImp(val userRepository: UserRepository): UserDetailsService {
    override fun loadUserByUsername(username: String): UserDetails? {
        return userRepository.findByName(username)
    }
}