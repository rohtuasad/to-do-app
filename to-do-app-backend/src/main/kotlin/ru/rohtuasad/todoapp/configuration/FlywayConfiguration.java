package ru.rohtuasad.todoapp.configuration;

import javax.sql.DataSource;
import org.flywaydb.core.Flyway;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

@Configuration
public class FlywayConfiguration {

  private final DataSource dataSource;

  public FlywayConfiguration(DataSource dataSource) {
    this.dataSource = dataSource;
  }

  @Bean(initMethod = "migrate")
  @DependsOn("securityUtilsFlyway")
  public Flyway flyway() {
    return Flyway.configure().dataSource(dataSource).
        baselineOnMigrate(true).schemas("to_do_app")
        .defaultSchema("to_do_app").locations("db/migration").load();
  }
}
