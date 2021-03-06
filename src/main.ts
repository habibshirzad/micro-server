import { NestFactory } from '@nestjs/core';
import { NestMicroservice } from '@nestjs/microservices';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport } from '@nestjs/microservices'



// create micro service config options

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 3000
  }
}



async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (
    AppModule,
    microserviceOptions
  );
  await app.listen();
}
bootstrap();
