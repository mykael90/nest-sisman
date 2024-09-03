import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { LogInterceptor } from './interceptors/log.interceptor';
import 'src/utils/bigint-tojson';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://10.10.10.10:3002', 'http://localhost:3000'],
  });

  app.useGlobalPipes(new ValidationPipe());

  app.enableShutdownHooks();

  // app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(3000);
}
bootstrap();
