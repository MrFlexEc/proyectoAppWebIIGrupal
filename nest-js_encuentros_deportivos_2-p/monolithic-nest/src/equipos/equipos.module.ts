import { Module } from '@nestjs/common';
import { EquiposServicios } from './servicios/equipos.service';
import { EquiposController } from './controladores/equipos.controller';
//Se importa la conexion a la base de datos 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipos } from './entidades/equipos.entity';

@Module({
  //hacer la conexión indicando que este módulo va a utilizar este dominio bajo la entidad Equipos
  imports:[TypeOrmModule.forFeature([Equipos])],
  providers: [EquiposServicios],
  controllers: [EquiposController]
})
export class EquiposModule {}
