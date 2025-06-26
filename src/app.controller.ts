// src/app.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  /**
   * Escuta mensagens TCP no padrão `{ cmd: 'ping' }` e responde com "pong".
   */
  @MessagePattern({ cmd: 'ping' })
  ping(): string {
    return 'pong';
  }
}
