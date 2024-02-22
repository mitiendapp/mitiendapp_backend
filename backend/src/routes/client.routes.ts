import { Router } from "express";
import { createClient, getClientById, getClients } from "../controllers/client.controller";
const ROUTER = Router();

ROUTER.get('/clients', getClients);
ROUTER.get('/client/id', getClientById);
ROUTER.post('/createClient', createClient);
// ROUTER.post('/client/update', updateClient);
// ROUTER.post('/client/delete', deleteClient);


module.exports = ROUTER;
