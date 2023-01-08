import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { CreateMantenimientoDTO } from './dto/mantenimiento.dto';
import { MantenimientoService } from './mantenimiento.service';

@Controller('mantenimiento')
export class MantenimientoController {
  constructor(private mantenimientoService: MantenimientoService) {}
  @Post('/create')
  async createPost(
    @Res() res,
    @Body() createMantenimientoDTO: CreateMantenimientoDTO,
  ) {
    const mantenimiento = await this.mantenimientoService.createMantenimiento(
      createMantenimientoDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'recieved',
      mantenimiento: mantenimiento,
    });
  }
  @Get('/')
  async getMantenimientos(@Res() res) {
    const mantenimientos = await this.mantenimientoService.getMantenimientos();
    return res.status(HttpStatus.OK).json({
      mantenimientos,
    });
  }
  @Get('/:mantenimientoID')
  async getMantenimiento(
    @Res() res,
    @Param('mantenimientoID') mantenimientoID,
  ) {
    const mantenimiento = await this.mantenimientoService.getMantenimiento(
      mantenimientoID,
    );
    return res.status(HttpStatus.OK).json(mantenimiento);
  }
  @Put('/update')
  async updateMantenimiento(
    @Res() res,
    @Body() createMantenimientoDTO: CreateMantenimientoDTO,
    @Query('mantenimientoID') mantenimientoID,
  ) {
    const updatedMantenimiento =
      await this.mantenimientoService.updateMantenimiento(
        mantenimientoID,
        createMantenimientoDTO,
      );
    if (!updatedMantenimiento)
      throw new NotFoundException('Mantenimiento no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Mantenimiento actualizado',
      updatedMantenimiento,
    });
  }
  @Delete('/delete')
  async deleteMantenimiento(
    @Res() res,
    @Query('mantenimientoID') mantenimientoID,
  ) {
    const deletedMantenimiento =
      await this.mantenimientoService.deleteMantenimiento(mantenimientoID);
    if (!deletedMantenimiento)
      throw new NotFoundException('Mantenimiento no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Mantenimeinto eliminado',
      deletedMantenimiento,
    });
  }
}
