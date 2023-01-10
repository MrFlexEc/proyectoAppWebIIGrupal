"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = require("express");
const cancha_controller_1 = require("../controllers/cancha.controller");
exports.api = (0, express_1.Router)();
exports.api.post('/crear', cancha_controller_1.createCancha);
exports.api.get('/datos', cancha_controller_1.getAllCancha);
exports.api.get('/ver/:id', cancha_controller_1.getCancha);
exports.api.put('/canchaUpdate/:id', cancha_controller_1.updateCancha);
exports.api.delete('/deletecancha/:id', cancha_controller_1.deleteCancha);
