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
exports.deleteClient = exports.updateClient = exports.getClientById = exports.getClients = exports.createClient = void 0;
const client_service_1 = require("../services/client.service");
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientService = new client_service_1.ClientService();
    try {
        const client = yield clientService.create(Object.assign({}, req.body));
        return res.status(201).json({
            message: "Client created succesfully",
            data: client
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.createClient = createClient;
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientService = new client_service_1.ClientService();
    try {
        const clients = yield clientService.get();
        return res.status(200).json({
            clients
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.getClients = getClients;
const getClientById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const clientService = new client_service_1.ClientService();
    try {
        const client = yield clientService.find(email);
        return res.status(200).json({
            client
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.getClientById = getClientById;
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const clientService = new client_service_1.ClientService();
    try {
        const client = yield clientService.update(email, req.body);
        return res.status(200).json({
            message: "Client updated succesfully",
            statuscode: client
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.updateClient = updateClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const clientService = new client_service_1.ClientService();
    try {
        const client = yield clientService.delete(email);
        console.log(client);
        return res.status(200).json({
            message: "Client deleted succesfully",
            statuscode: client
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});
exports.deleteClient = deleteClient;
