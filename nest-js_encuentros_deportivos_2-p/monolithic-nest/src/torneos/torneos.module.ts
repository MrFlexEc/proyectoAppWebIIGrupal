import { Module } from '@nestjs/common';
import { TorneosServicios } from './servicios/torneos.service';
import { TorneosController } from './controladores/torneos.controller';

//Se importa la conexion a la base de datos 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneos } from './entidades/torneos.entity';
@Module({
  //hacer la conexión indicando que este módulo va a utilizar este dominio bajo la entidad Partidos
  imports:[TypeOrmModule.forFeature([Torneos])],
  providers: [TorneosServicios],
  controllers: [TorneosController]
})
export class TorneosModule {}
