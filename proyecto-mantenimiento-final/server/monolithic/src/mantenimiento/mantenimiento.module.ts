import { Module } from '@nestjs/common';
import { MantenimientoController } from './mantenimiento.controller';
import { MantenimientoService } from './mantenimiento.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MantenimietoSchema } from './schemas/mantenimiento.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Mantenimiento', schema: MantenimietoSchema },
    ]),
  ],
  controllers: [MantenimientoController],
  providers: [MantenimientoService],
})
export class MantenimientoModule {}
