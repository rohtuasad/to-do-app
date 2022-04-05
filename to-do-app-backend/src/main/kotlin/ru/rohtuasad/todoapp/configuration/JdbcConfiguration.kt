package ru.rohtuasad.todoapp.configuration

import org.springframework.boot.jdbc.DataSourceBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.data.jdbc.repository.config.AbstractJdbcConfiguration
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories
import org.springframework.data.relational.core.mapping.NamingStrategy
import javax.sql.DataSource

@Configuration
@EnableJdbcRepositories(basePackages = ["ru.rohtuasad.todoapp"])
class JdbcConfiguration: AbstractJdbcConfiguration() {
    @Bean
    fun namingStrategy(): NamingStrategy {
        return object : NamingStrategy {
            override fun getSchema(): String {
                return "to_do_app"
            }
        }
    }

    @Primary
    @Bean
    fun getDataSource(): DataSource? {
        val dataSourceBuilder = DataSourceBuilder.create()
        dataSourceBuilder. driverClassName("org.h2.Driver")
        dataSourceBuilder.url("jdbc:h2:mem:test")
        dataSourceBuilder.username("SA")
        dataSourceBuilder.password("password")
        return dataSourceBuilder.build()
    }
}
