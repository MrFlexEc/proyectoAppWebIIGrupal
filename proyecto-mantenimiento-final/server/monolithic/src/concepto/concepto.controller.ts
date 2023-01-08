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
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDTO } from './dto/concepto.dto';

@Controller('concepto')
export class ConceptoController {
  constructor(private conceptoService: ConceptoService) {}
  @Post('/create')
  async createPost(@Res() res, @Body() createConceptoDTO: CreateConceptoDTO) {
    const concepto = await this.conceptoService.createConcepto(
      createConceptoDTO,
    );
    res.status(HttpStatus.OK).json({
      message: 'recieved',
      concepto: concepto,
    });
  }
  @Get('/')
  async getConceptos(@Res() res) {
    const conceptos = await this.conceptoService.getConceptos();
    res.status(HttpStatus.OK).json({
      conceptos,
    });
  }
  @Get('/:conceptoID')
  async getAuto(@Res() res, @Param('conceptoID') conceptoID) {
    const concepto = await this.conceptoService.getConcepto(conceptoID);
    if (!concepto) throw new NotFoundException('Concepto no encontrado');
    return res.status(HttpStatus.OK).json(concepto);
  }
  @Put('/update')
  async updateAuto(
    @Res() res,
    @Body() createConceptoDTO: CreateConceptoDTO,
    @Query('conceptoID') conceptoID,
  ) {
    const updateConcepto = await this.conceptoService.updateConcepto(
      conceptoID,
      createConceptoDTO,
    );
    if (!updateConcepto) throw new NotFoundException('Concepto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Concepto actualizado',
      updateConcepto,
    });
  }
  @Delete('/delete')
  async deleteAuto(@Res() res, @Query('conceptoID') conceptoID) {
    const conceptoDeleted = await this.conceptoService.deleteConcepto(
      conceptoID,
    );
    if (!conceptoDeleted) throw new NotFoundException('Concepto no encontrado');
    return res.status(HttpStatus.OK).json({
      message: 'Concepto borrado exitosamente',
      conceptoDeleted,
    });
  }
}
