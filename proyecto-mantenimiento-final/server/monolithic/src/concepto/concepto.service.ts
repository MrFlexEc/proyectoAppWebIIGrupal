import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Concepto } from './interfaces/concepto.interface';
import { CreateConceptoDTO } from './dto/concepto.dto';

@Injectable()
export class ConceptoService {
  constructor(
    @InjectModel('Concepto') private readonly conceptoModel: Model<Concepto>,
  ) {}

  async getConcepto(conceptoID: string): Promise<Concepto> {
    const concepto = await this.conceptoModel.findById(conceptoID);
    return concepto;
  }
  async getConceptos(): Promise<Concepto[]> {
    const conceptos = await this.conceptoModel.find();
    return conceptos;
  }
  async createConcepto(
    createConceptoDTO: CreateConceptoDTO,
  ): Promise<Concepto> {
    const concepto = new this.conceptoModel(createConceptoDTO);
    return await concepto.save();
  }
  async updateConcepto(
    conceptoID: string,
    createConceptoDTO: CreateConceptoDTO,
  ): Promise<Concepto> {
    const updatedConcepto = await this.conceptoModel.findByIdAndUpdate(
      conceptoID,
      createConceptoDTO,
      { new: true },
    );
    return updatedConcepto;
  }
  async deleteConcepto(conceptoID: string): Promise<Concepto> {
    const deletedConcepto = await this.conceptoModel.findByIdAndDelete(
      conceptoID,
    );
    return deletedConcepto;
  }
}
