"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//protipos a usar en el documento o codigo
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaciente = exports.updatePaciente = exports.getPaciente = exports.getAllPacientes = exports.createPaciente = void 0;
const paciente_model_1 = require("../models/paciente.model");
//rutas de acceso al modelo
//craciacion de metodo para crear pacientes, la cual seria un POST
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const paciente = new paciente_model_1.Paciente();
    paciente.nombre = data.nombre;
    paciente.identificacion = data.identificacion;
    paciente.edad = data.edad;
    paciente.altura = data.altura;
    paciente.save((err, paciente_save) => {
        if (paciente_save) {
            res.status(200).send({ message: 'Paciente creado correctamente', paciente: paciente_save });
        }
        else {
            res.status(500).send(err);
        }
    });
});
//exportacion de el metodo 
exports.createPaciente = createPaciente;
//creacion de metodo para obtener todos los pacientes registrados 
const getAllPacientes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    paciente_model_1.Paciente.find((err, paciente_data) => {
        if (paciente_data) {
            res.status(200).send({ paciente: paciente_data });
        }
        else {
            res.status(403).send({ message: 'No existen registros', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
//exportando el metodo 
exports.getAllPacientes = getAllPacientes;
//metodo para obtener un solo paciente
const getPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    yield paciente_model_1.Paciente.findById(id, (err, paciente_data) => {
        if (paciente_data) {
            res.status(200).send({ paciente: paciente_data });
        }
        else {
            res.status(403).send({ message: 'No existe el paciente especificado', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
//exporando el metodo 
exports.getPaciente = getPaciente;
//metodo para modificar un paciente a traves de sus atributos 
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    const data = req.body;
    paciente_model_1.Paciente.findByIdAndUpdate(id, {
        nombre: data.nombre,
        identificacion: data.identificacion,
        edad: data.edad,
        altura: data.altura
    }, (err, paciente_edit) => {
        if (paciente_edit) {
            res.status(200).send({ paciente: paciente_edit });
        }
        else {
            res.status(500).send(err);
        }
    }).clone().catch(function (err) { console.log(err); });
});
//exportando metodo 
exports.updatePaciente = updatePaciente;
//por ultimo metdo para eliminacion delete
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    paciente_model_1.Paciente.findByIdAndDelete(id, (err, paciente_eliminado) => {
        if (paciente_eliminado) {
            res.status(200).send({ paciente_eliminado });
        }
        else {
            res.status(500).send({ message: 'No se puedo eliminar el paciente', err });
        }
    });
});
exports.deletePaciente = deletePaciente;
