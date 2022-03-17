package ru.rohtuasad.todoapp.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.annotation.Id
import org.springframework.data.domain.Persistable
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import java.util.*

class User() : Persistable<UUID>, UserDetails {
    constructor(name: String, login: String, password: String, email: String) : this(
        null,
        name,
        login,
        password,
        email
    )

    constructor(
        userId: UUID?,
        name: String,
        login: String,
        password: String,
        email: String
    ) : this() {
        this.userId = userId
        this.name = name
        this.password = BCryptPasswordEncoder().encode(password)
        this.email = email
        this.login = login
    }

    @Id
    @JsonProperty("user-id")
    private var userId: UUID? = null

    @JsonProperty("name")
    lateinit var name: String

    @JsonProperty("login")
    lateinit var login: String

    private lateinit var password: String
    private var isEnabled: Boolean = true

    @JsonProperty("email")
    private lateinit var email: String

    override fun getId(): UUID {
        if (this.userId == null) {
            this.userId = UUID.randomUUID()
        }
        return this.userId!!
    }

    override fun isNew(): Boolean {
        return this.userId == null
    }

    override fun getAuthorities(): MutableCollection<out GrantedAuthority> {
        TODO("Not yet implemented")
    }

    override fun getPassword(): String {
        return this.password
    }

    override fun getUsername(): String {
        return this.name
    }

    override fun isAccountNonExpired(): Boolean {
        return this.isAccountNonExpired
    }

    override fun isAccountNonLocked(): Boolean {
        return this.isAccountNonLocked
    }

    override fun isCredentialsNonExpired(): Boolean {
        return this.isCredentialsNonExpired
    }

    override fun isEnabled(): Boolean {
        return this.isEnabled
    }

    fun setIsEnabled(value: Boolean) {
        this.isEnabled = value
    }
}
