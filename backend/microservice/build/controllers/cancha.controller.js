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
exports.deleteCancha = exports.updateCancha = exports.getCancha = exports.getAllCancha = exports.createCancha = void 0;
const cancha_model_1 = require("../models/cancha.model");
const createCancha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const cancha = new cancha_model_1.Cancha();
    cancha.descripcion = data.descripcion;
    cancha.save((err, cancha_save) => {
        if (cancha_save) {
            res.status(200).send({ message: 'cancha creada correctamente', cancha: cancha_save });
        }
        else {
            res.status(500).send(err);
        }
    });
});
exports.createCancha = createCancha;
const getAllCancha = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    cancha_model_1.Cancha.find((err, cancha_data) => {
        if (cancha_data) {
            res.status(200).send({ cancha: cancha_data });
        }
        else {
            res.status(403).send({ message: 'No hay cancha registrada', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getAllCancha = getAllCancha;
const getCancha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    yield cancha_model_1.Cancha.findById(id, (err, cancha_data) => {
        if (cancha_data) {
            res.status(200).send({ cancha: cancha_data });
        }
        else {
            res.status(403).send({ message: 'No existe ese número de cancha', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getCancha = getCancha;
const updateCancha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    const data = req.body;
    cancha_model_1.Cancha.findByIdAndUpdate(id, {
        descripcion: data.descripcion
    }, (err, cancha_edit) => {
        if (cancha_edit) {
            res.status(200).send({ cancha: cancha_edit });
        }
        else {
            res.status(500).send(err);
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.updateCancha = updateCancha;
const deleteCancha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    cancha_model_1.Cancha.findByIdAndDelete(id, (err, cancha_eliminado) => {
        if (cancha_eliminado) {
            res.status(200).send({ cancha_eliminado });
        }
        else {
            res.status(500).send({ message: 'No es posible eliminar la cancha', err });
        }
    });
});
exports.deleteCancha = deleteCancha;
