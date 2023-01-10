//Librerias, Modulos de entidades
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApostadorModule } from './apostador/apostador.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PronosticoModule } from './pronostico/pronostico.module';

//Enlace y/o unión con la base de datos mediante una importación
//Hago uso de la base de datos de un compañero de grupo por un fallo en la mía
@Module({
  imports: [ApostadorModule, MongooseModule.forRoot('mongodb://mongo/proyect'), PronosticoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
