import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptoModule } from './concepto/concepto.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConceptoModule,
    MantenimientoModule,
    MongooseModule.forRoot('mongodb://localhost/conceptos'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
