import { Request, Response } from "express";
import { IEncuentrosDeportivos } from "../interfaces/encuentrodeportivo.interface";
import { EncuentroDeportivo } from "../models/encuentrodeportivo.model";

export const createPaciente = async(req: Request, res:Response)=>{
    const data = req.body as IEncuentrosDeportivos;

    const encuentrodeportivo = new EncuentroDeportivo();

    encuentrodeportivo.nombre = data.nombre;
    encuentrodeportivo.identificacion = data.identificacion;
    encuentrodeportivo.edad = data.edad;
    encuentrodeportivo.altura = data.altura;
     
    encuentrodeportivo.save((err, encuentrodeportivo_save)=>{
        if (encuentrodeportivo_save) {
            res.status(200).send({message: 'El encuentro deportivo se ha creado correctamente', encuentrodeportivo: encuentrodeportivo_save});
        }else{
            res.status(500).send(err);
        }
    })
}

export const getAllEncuentrosDeportivos = async (_req: Request, res: Response)=>{
    EncuentroDeportivo.find((err, encuentrodeportivo_data)=>{
        if (encuentrodeportivo_data) {
            res.status(200).send({encuentrodeportivo: encuentrodeportivo_data});
        } else {
            res.status(403).send({message: 'No existen registros', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const getEncuentroDeportivo = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    await EncuentroDeportivo.findById(id, (err: Error, encuentrodeportivo_data: IEncuentroDeportivo)=>{
        if (encuentrodeportivo) {
            res.status(200).send({encuentrodeportivo: encuentrodeportivo_data})
        } else {
            res.status(403).send({message: 'No existe el encuentro deportivo especificado', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const updateEncuentroDeportivo = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    const data = req.body;

    EncuentroDeportivo.findByIdAndUpdate(id, {
        Equipo1: data.Equipo1,
        Equipo2: data.Equipo2,
        Fecha: data.Fecha,
        Hora: data.Hora
    },(err, encuentrodeportivo_edit)=>{
        if (encuentrodeportivo_edit) {
            res.status(200).send({encuentrodeportivo: encuentrodeportivo_edit})
        } else {
            res.status(500).send(err)
        }
    }).clone().catch(function(err){ console.log(err)})
}
 export const deleteEncuentroDeportivo = async (req: Request, res: Response)=>{
    const id = req.params['id'];

    EncuentroDeportivo.findByIdAndDelete(id, (err : Error, encuentrodeportivo_eliminado: IEncuentroDeportivo)=>{
        if (encuentrodeportivo_eliminado) {
            res.status(200).send({encuentrodeportivo_eliminado})
        } else {
            res.status(500).send({message: 'No se puedo eliminar el encuentro', err})
        }
    })
 }
