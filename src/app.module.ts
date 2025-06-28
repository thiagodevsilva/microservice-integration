// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { Logger } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // permite acesso em qualquer lugar da aplicação
    }),
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {
    const logger = new Logger('AppModule');
    logger.log(
      `AppModule carregado com TCP_HOST=${this.configService.get(
        'TCP_HOST',
      )} e TCP_PORT=${this.configService.get('TCP_PORT')}`,
    );
  }
}
