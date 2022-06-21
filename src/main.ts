import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
