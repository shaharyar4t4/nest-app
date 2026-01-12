import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      // whiteList this command remove extra fields that are not in dto
      whitelist: true,
      //forbidNonWhitelisted this command show the error 
      forbidNonWhitelisted: true
    }
  ))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
