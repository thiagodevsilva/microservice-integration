// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const host = configService.get<string>('TCP_HOST') || '127.0.0.1';
  const port = Number(configService.get<string>('TCP_PORT')) || 3001;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host, port },
  });

  await app.startAllMicroservices();
  logger.log(`Microservice is listening on TCP ${host}:${port}`);
}
bootstrap();
