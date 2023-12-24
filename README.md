### NestJs backend app with JWT Auth


.development.env
.production.env
.env

```javascript
PORT=5000
POSTGRES_HOST=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRESS_PASSWORD=root
POSTGRESS_PORT=5432
SECRET_KEY=secret_key_safasf
```

Запустить проект
```bash
docker compose up
```
Остановить проект
```bash
docker compose down
```

Документация swagger
```bash
http://localhost:5000/api/docs
```


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

Работа с файлами
```bash
nest generate module files
nest generate service files

npm i uuid

npm install --save @nestjs/serve-static


```


