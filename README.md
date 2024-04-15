# Adonis + React User CRUD

Simple User Crud application using [React](https://react.dev/reference/react) and [Adonis](https://docs.adonisjs.com/guides/introduction).

## Stack

- AdonisJs
- React
- Tailwind
- MySQL
- Docker

## Setup

1. Clone the Repository 

####
    git clone https://github.com/AndredeQueirozPatrinicola/AdonisReactUserCrud.git
####

2. Copy .env

####
    cd AdonisReactUserCrud
    cp .env.example .env
####

3. Configure .env for your computer:

####
    TZ=UTC
    PORT=5000
    HOST=0.0.0.0
    LOG_LEVEL=info
    APP_KEY=eGcsFy0oSN6FtMmgj-5E0_F3AEWv1M1B
    NODE_ENV=development
    DB_HOST=db
    DB_PORT=3306
    DB_USER=user
    DB_PASSWORD=password
    DB_DATABASE=adonis
    SESSION_DRIVER=cookie
    FRONT_PORT=3000
####

## Docker

#### Services:

    - api
    - react
    - db

#### Run:

    docker compose up

#### Access:

1. UI
    http://localhost:{FRONT_PORT}

2. API
    http://localhost:{PORT}/api/...