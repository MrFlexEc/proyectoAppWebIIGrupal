//Importación de liberías
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  cors } from 'cors';

const cors = require("cors")//permitir el intercambio de recursos.

//metodo principal
async function bootstrap() {
  //creacion de constante para un nest factory
  const app = await NestFactory.create(AppModule);
 //datos que se obtendran dentro de Swagger
   app.use(cors())

  await app.listen(3000);


}
bootstrap();
