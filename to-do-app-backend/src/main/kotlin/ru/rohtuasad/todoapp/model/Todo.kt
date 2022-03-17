package ru.rohtuasad.todoapp.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.annotation.Id
import org.springframework.data.domain.Persistable
import java.time.LocalDate
import java.util.*

class Todo(
    @Id private var id: UUID?,
    val description: String,
    val targetDate: LocalDate,
    val isDone: Boolean,
    val userName: String
) : Persistable<UUID> {
    constructor(
        description: String,
        targetDate: LocalDate,
        isDone: Boolean,
        @JsonProperty("username") userName: String
    ) : this(null, description, targetDate, isDone, userName)

    override fun getId(): UUID? {
        if (this.id == null) {
            this.id = UUID.randomUUID()
        }
        return this.id!!
    }

    override fun isNew(): Boolean {
        return this.id == null
    }
}
