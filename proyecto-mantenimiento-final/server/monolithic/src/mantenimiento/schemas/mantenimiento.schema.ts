import { Schema } from 'mongoose';
export const MantenimietoSchema = new Schema({
  idAuto: [
    {
      type: Schema.Types.ObjectId,
      ref: 'autos',
    },
  ],
  idConcepto: [
    {
      type: Schema.Types.ObjectId,
      ref: 'conceptos',
    },
  ],
  fechaMantenimiento: String,
  detalle: String,
  precio: Number,
});
