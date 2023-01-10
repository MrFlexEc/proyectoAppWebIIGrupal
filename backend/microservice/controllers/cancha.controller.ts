import { Request, Response } from "express";
import { ICanchas } from "../interfaces/cancha.interface";
import { Cancha } from "../models/cancha.model";

export const createCancha = async(req: Request, res:Response)=>{
    const data = req.body as ICanchas;

    const cancha = new Cancha();

    cancha.descripcion = data.descripcion;
     
    cancha.save((err, cancha_save)=>{
        if (cancha_save) {
            res.status(200).send({message: 'Cancha creada correctamente', cancha: cancha_save});
        }else{
            res.status(500).send(err);
        }
    })
}

export const getAllCanchas = async (_req: Request, res: Response)=>{
    Cancha.find((err, cancha_data)=>{
        if (cancha_data) {
            res.status(200).send({cancha: cancha_data});
        } else {
            res.status(403).send({message: 'No existen registros', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const getCancha = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    await Cancha.findById(id, (err: Error, cancha_data: ICanchas)=>{
        if (cancha_data) {
            res.status(200).send({cancha: cancha_data})
        } else {
            res.status(403).send({message: 'No existe el cancha especificado', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const updateCancha = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    const data = req.body;

    Cancha.findByIdAndUpdate(id, {
        descripcion: data.descripcion
    },(err, cancha_edit)=>{
        if (cancha_edit) {
            res.status(200).send({cancha: cancha_edit})
        } else {
            res.status(500).send(err)
        }
    }).clone().catch(function(err){ console.log(err)})
}
 export const deleteCancha = async (req: Request, res: Response)=>{
    const id = req.params['id'];

    Cancha.findByIdAndDelete(id, (err : Error, cancha_eliminado: ICanchas)=>{
        if (cancha_eliminado) {
            res.status(200).send({cancha_eliminado})
        } else {
            res.status(500).send({message: 'No es posible eliminar la cancha', err})
        }
    })
 }
