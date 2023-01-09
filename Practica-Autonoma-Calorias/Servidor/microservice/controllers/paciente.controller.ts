import { Request, Response } from "express";
import { IPacientes } from "../interfaces/paciente.interface";
import { Paciente } from "../models/paciente.model";

export const createPaciente = async(req: Request, res:Response)=>{
    const data = req.body as IPacientes;

    const paciente = new Paciente();

    paciente.nombre = data.nombre;
    paciente.identificacion = data.identificacion;
    paciente.edad = data.edad;
    paciente.altura = data.altura;
     
    paciente.save((err, paciente_save)=>{
        if (paciente_save) {
            res.status(200).send({message: 'Paciente creado correctamente', paciente: paciente_save});
        }else{
            res.status(500).send(err);
        }
    })
}

export const getAllPacientes = async (_req: Request, res: Response)=>{
    Paciente.find((err, paciente_data)=>{
        if (paciente_data) {
            res.status(200).send({paciente: paciente_data});
        } else {
            res.status(403).send({message: 'No existen registros', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const getPaciente = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    await Paciente.findById(id, (err: Error, paciente_data: IPacientes)=>{
        if (paciente_data) {
            res.status(200).send({paciente: paciente_data})
        } else {
            res.status(403).send({message: 'No existe el paciente especificado', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const updatePaciente = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    const data = req.body;

    Paciente.findByIdAndUpdate(id, {
        nombre: data.nombre,
        identificacion: data.identificacion,
        edad: data.edad,
        altura: data.altura
    },(err, paciente_edit)=>{
        if (paciente_edit) {
            res.status(200).send({paciente: paciente_edit})
        } else {
            res.status(500).send(err)
        }
    }).clone().catch(function(err){ console.log(err)})
}
 export const deletePaciente = async (req: Request, res: Response)=>{
    const id = req.params['id'];

    Paciente.findByIdAndDelete(id, (err : Error, paciente_eliminado: IPacientes)=>{
        if (paciente_eliminado) {
            res.status(200).send({paciente_eliminado})
        } else {
            res.status(500).send({message: 'No se puedo eliminar el paciente', err})
        }
    })
 }
