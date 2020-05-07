/*CREATE TYPE bottle_type AS ENUM ('12kg', '13kg', '55kg'); */
CREATE TABLE orders (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    phone_number INTEGER ,
    street varchar,
    client_name varchar,
    post_cod INTEGER  NULL,
    bottle_type varchar,
    date_deliver TIMESTAMP,
    observations varchar 
)
