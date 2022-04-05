create table to_do_app.todo
(
    id          uuid
        constraint todo_pk
            primary key,
    description text,
    target_date datetime,
    is_done     boolean NOT NULL DEFAULT false,
    user_name   varchar(50),
    constraint user_name_fk FOREIGN KEY (user_name)
        REFERENCES security_utils.user (login)
        ON UPDATE CASCADE
        ON DELETE CASCADE
)