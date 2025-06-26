// src/client.ts
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const client = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001,
    },
  });

  const response = await client.send({ cmd: 'ping' }, {}).toPromise();
  console.log('🔁 Resposta do microserviço:', response);
}

bootstrap();
