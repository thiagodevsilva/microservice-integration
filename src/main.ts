// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: Number(process.env.TCP_PORT) || 3001,
      },
    },
  );

  await app.listen();
  console.log(
    `🚀 Microservice is listening on TCP port ${process.env.TCP_PORT || 3001}`,
  );
}
bootstrap();
