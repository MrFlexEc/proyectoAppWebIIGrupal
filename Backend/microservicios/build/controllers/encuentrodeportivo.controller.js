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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEncuentroDeportivo = exports.updateEncuentroDeportivo = exports.getEncuentroDeportivo = exports.getAllEncuentrosDeportivos = exports.createEncuentroDeportivo = void 0;
const encuentrodeportivo_model_1 = require("../models/encuentrodeportivo.model");
const createEncuentroDeportivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const encuentrodeportivo = new encuentrodeportivo_model_1.EncuentroDeportivo();
    encuentrodeportivo.Equipo1 = data.Equipo1;
    encuentrodeportivo.Equipo2 = data.Equipo2;
    encuentrodeportivo.Fecha = data.Fecha;
    encuentrodeportivo.Hora = data.Hora;
    encuentrodeportivo.save((err, encuentrodeportivo_save) => {
        if (encuentrodeportivo_save) {
            res.status(200).send({ message: 'El encuentro deportivo ha sido creado correctamente', encuentrodeportivo: encuentrodeportivo_save });
        }
        else {
            res.status(500).send(err);
        }
    });
});
exports.createEncuentroDeportivo = createEncuentroDeportivo;
const getAllEncuentrosDeportivos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    encuentrodeportivo_model_1.encuentrodeportivo.find((err, encuentrodeportivo_data) => {
        if (encuentrodeportivo_data) {
            res.status(200).send({ encuentrodeportivo: encuentrodeportivo_data });
        }
        else {
            res.status(403).send({ message: 'No existen registros', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getAllEncuentrosDeportivos = getAllEncuentrosDeportivos;
const getEncuentroDeportivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    yield encuentrodeportivo_model_1.EncuentroDeportivo.findById(id, (err, encuentrodeportivo_data) => {
        if (encuentrodeportivo_data) {
            res.status(200).send({ encuentrodeportivo: encuentrodeportivo_data });
        }
        else {
            res.status(403).send({ message: 'No existe el paciente especificado', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getEncuentroDeportivo = getEncuentroDeportivo;
const updateEncuentroDeportivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    const data = req.body;
    paciente_model_1.EncuentroDeportivo.findByIdAndUpdate(id, {
        Equipo1: data.Equipo1,
        Equipo2: data.Equipo2,
        Hora: data.Hora,
        Fecha: data.Fecha
    }, (err, encuentrodeportivo) => {
        if (encuentrodeportivo) {
            res.status(200).send({ encuentrodeportivo: encuentrodeportivo });
        }
        else {
            res.status(500).send(err);
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.updateEncuentroDeportivo = updateEncuentroDeportivo;
const deleteEncuentroDeportivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    encuentrodeportivo_model_1.EncuentroDeportivo.findByIdAndDelete(id, (err, encuentrodeportivo_eliminado) => {
        if (encuentrodeportivo_eliminado) {
            res.status(200).send({ encuentrodeportivo_eliminado });
        }
        else {
            res.status(500).send({ message: 'No se puedo eliminar el encuentro deportivo', err });
        }
    });
});
exports.deleteEncuentroDeportivo = deleteEncuentroDeportivo;
