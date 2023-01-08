import { Request, Response } from "express";
import { IAutos } from "../interfaces/auto.interface";
import { Auto } from "../models/auto.model";

export const createAuto = async(req: Request, res:Response)=>{
    const data = req.body as IAutos;

    const auto = new Auto();

    auto.descripcion = data.descripcion;
    auto.placa = data.placa;
    auto.color = data.color;
    auto.fabricante = data.fabricante;
    auto.tipo = data.tipo;
    auto.anio = data.anio;
    auto.clasificacion = data.clasificacion;

    auto.save((err, auto_save)=>{
        if (auto_save) {
            res.status(200).send({message: 'Auto creado correctamente', auto: auto_save});
        }else{
            res.status(500).send(err);
        }
    })
}

export const getAllAutos = async (_req: Request, res: Response)=>{
    Auto.find((err, auto_data)=>{
        if (auto_data) {
            res.status(200).send({auto: auto_data});
        } else {
            res.status(403).send({message: 'No existen registros', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const getAuto = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    await Auto.findById(id, (err: Error, auto_data: IAutos)=>{
        if (auto_data) {
            res.status(200).send({auto: auto_data})
        } else {
            res.status(403).send({message: 'No existe el auto especificado', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const updateAuto = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    const data = req.body;

    Auto.findByIdAndUpdate(id, {
        descripcion: data.descripcion,
        placa:data.placa,
        color: data.color,
        fabricante: data.fabricante,
        tipo: data.tipo,
        anio: data.anio,
        clasificacion: data.clasificacion
    },(err, auto_edit)=>{
        if (auto_edit) {
            res.status(200).send({auto: auto_edit})
        } else {
            res.status(500).send(err)
        }
    }).clone().catch(function(err){ console.log(err)})
}
 export const deleteAuto = async (req: Request, res: Response)=>{
    const id = req.params['id'];

    Auto.findByIdAndDelete(id, (err : Error, auto_eliminado: IAutos)=>{
        if (auto_eliminado) {
            res.status(200).send({auto_eliminado})
        } else {
            res.status(500).send({message: 'No se puedo eliminar el auto', err})
        }
    })
 }
