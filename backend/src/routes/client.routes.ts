import { Router } from "express";
import { createClient, deleteClient, getClientById, getClients, updateClient } from "../controllers/client.controller";
const ROUTER = Router();

ROUTER.get('/clients', getClients);
ROUTER.get('/client', getClientById);
ROUTER.post('/client/create', createClient);
ROUTER.post('/client/update', updateClient);
ROUTER.post('/client/delete', deleteClient);


module.exports = ROUTER;
