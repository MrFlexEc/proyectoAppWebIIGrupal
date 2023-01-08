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
exports.deleteAuto = exports.updateAuto = exports.getAuto = exports.getAllAutos = exports.createAuto = void 0;
const auto_model_1 = require("../models/auto.model");
const createAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const auto = new auto_model_1.Auto();
    auto.descripcion = data.descripcion;
    auto.placa = data.placa;
    auto.color = data.color;
    auto.fabricante = data.fabricante;
    auto.tipo = data.tipo;
    auto.anio = data.anio;
    auto.clasificacion = data.clasificacion;
    auto.save((err, auto_save) => {
        if (auto_save) {
            res.status(200).send({ message: 'Auto creado correctamente', auto: auto_save });
        }
        else {
            res.status(500).send(err);
        }
    });
});
exports.createAuto = createAuto;
const getAllAutos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    auto_model_1.Auto.find((err, auto_data) => {
        if (auto_data) {
            res.status(200).send({ auto: auto_data });
        }
        else {
            res.status(403).send({ message: 'No existen registros', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getAllAutos = getAllAutos;
const getAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    yield auto_model_1.Auto.findById(id, (err, auto_data) => {
        if (auto_data) {
            res.status(200).send({ auto: auto_data });
        }
        else {
            res.status(403).send({ message: 'No existe el auto especificado', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getAuto = getAuto;
const updateAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    const data = req.body;
    auto_model_1.Auto.findByIdAndUpdate(id, {
        descripcion: data.descripcion,
        placa: data.placa,
        color: data.color,
        fabricante: data.fabricante,
        tipo: data.tipo,
        anio: data.anio,
        clasificacion: data.clasificacion
    }, (err, auto_edit) => {
        if (auto_edit) {
            res.status(200).send({ auto: auto_edit });
        }
        else {
            res.status(500).send(err);
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.updateAuto = updateAuto;
const deleteAuto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    auto_model_1.Auto.findByIdAndDelete(id, (err, auto_eliminado) => {
        if (auto_eliminado) {
            res.status(200).send({ auto_eliminado });
        }
        else {
            res.status(500).send({ message: 'No se puedo eliminar el auto', err });
        }
    });
});
exports.deleteAuto = deleteAuto;
