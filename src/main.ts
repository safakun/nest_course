import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";


async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule) 

  const config = new DocumentBuilder()
  .setTitle('NestJs backend advanced app')
  .setDescription("REST API documentation")
  .setVersion('1.0.0')
  .addTag('Dmitry')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)

  // to make all endpoints be guarded
  // app.useGlobalGuards(JwtAuthGuard)

  await app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
}

start()

