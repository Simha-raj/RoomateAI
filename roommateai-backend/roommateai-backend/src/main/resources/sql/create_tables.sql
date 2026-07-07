CREATE TABLE IF NOT EXISTS roommate.users (
                                              id       BIGSERIAL PRIMARY KEY,
                                              email    VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role     VARCHAR(50)  NOT NULL CHECK (role IN ('ROLE_ADMIN', 'ROLE_USER'))
    );

CREATE TABLE IF NOT EXISTS roommate.roommates (
                                                  id           BIGSERIAL PRIMARY KEY,
                                                  name         VARCHAR(255) NOT NULL,
    email        VARCHAR(255) NOT NULL UNIQUE,
    phone        VARCHAR(20),
    room_number  VARCHAR(20),
    move_in_date DATE
    );