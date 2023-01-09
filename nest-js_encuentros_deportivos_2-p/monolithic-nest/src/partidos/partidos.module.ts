import { Module } from '@nestjs/common';
import { PartidosServicios } from './servicios/partidos.service';
import { PartidosController } from './controladores/partidos.controller';
//Se importa la conexion a la base de datos 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partidos } from './entidades/partidos.entity';
@Module({
  //hacer la conexión indicando que este módulo va a utilizar este dominio bajo la entidad Partidos
  imports:[TypeOrmModule.forFeature([Partidos])],
  providers: [ PartidosServicios],
  controllers: [PartidosController]
})
export class PartidosModule {}
