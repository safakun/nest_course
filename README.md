### NestJs course 
https://www.youtube.com/watch?v=dDeWWQWMM-Y 

1h 13 min

Контроллеры должны быть тонкими - только принимать и возвращать
Вся логика реализуется в сервисах 

### Доки для работы с БД
https://docs.nestjs.com/techniques/database 

Sequelize integration
https://docs.nestjs.com/recipes/sql-sequelize 

```bash
npm install --save sequelize sequelize-typescript 
npm install --save-dev @types/sequelize
```

Sequelize docs
https://sequelize.org/docs/v6/getting-started/ 

install dependecy for sequelize 
```bash
npm install --save pg pg-hstore # Postgres
```


```bash
mkdir users
nest generate module users
nest generate controller users
nest generate service users
```

Устанавливаем конфигурацию
```bash
npm i @nestjs/config
npm i cross-env
```

Запустить базу данных
```bash
docker compose up
```

### Установка Swagger 
```bash
npm i @nestjs/swagger swagger-ui-express
```


добавляем роли
```bash
nest generate module roles
nest generate controller roles
nest generate service roles

```

добавляем авторизацию
```bash
nest generate module auth
nest generate controller auth
nest generate service auth

npm i @nestjs/jwt bcryptjs
```
Для устранения кольцевой зависимости в auth.module используем
```javascript
 forwardRef(() => UsersModule),
```
в users.module 
```javascript
 forwardRef(() => AuthModule),
```

### Валидация входныъ данных
Pipes = строку перевести в число. валидация входных данных

установка пакетов для валидации
```bash
npm i class-validator class-transformer
``` 

Создаем посты
```bash
nest generate module posts
nest generate controller posts
nest generate service posts

```



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
