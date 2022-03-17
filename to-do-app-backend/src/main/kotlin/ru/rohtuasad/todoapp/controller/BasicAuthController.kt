package ru.rohtuasad.todoapp.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import ru.rohtuasad.todoapp.dto.AuthResponseDto

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class BasicAuthController {

  @GetMapping("/basicauth")
  fun basicAuth(): AuthResponseDto {
      return AuthResponseDto("You are authenticated")
  }
}
