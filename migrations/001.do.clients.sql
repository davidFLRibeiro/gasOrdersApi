CREATE TABLE clients (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    phone_number INTEGER NOT NULL,
    street varchar NOT NULL,
    client_name varchar NOT NULL,
    post_cod INTEGER  NOT NULL,
    bottle_type varchar NOT NULL,
    date_deliver TIMESTAMP NOT NULL,
    observations varchar NULL,
    delivered boolean NOT NULL
)
