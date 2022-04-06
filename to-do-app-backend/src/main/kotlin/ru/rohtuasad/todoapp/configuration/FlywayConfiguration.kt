package ru.rohtuasad.todoapp.configuration

import org.flywaydb.core.Flyway
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.DependsOn
import javax.sql.DataSource

@Configuration
class FlywayConfiguration(private val dataSource: DataSource) {
    @Bean(initMethod = "migrate")
    @DependsOn("securityUtilsFlyway")
    fun flyway(): Flyway {
        return Flyway.configure().dataSource(dataSource).baselineOnMigrate(true)
            .schemas("to_do_app")
            .defaultSchema("to_do_app").locations("db/migration").load()
    }
}
