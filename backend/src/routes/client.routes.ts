import { Router } from "express";
import { createClient, deleteClient, getClientById, getClients, updateClient } from "../controllers/client.controller";
const ROUTER = Router();

ROUTER.get('/clients', getClients);
ROUTER.get('/client/:email', getClientById);
ROUTER.post('/client/create', createClient);
ROUTER.post('/client/update/:email', updateClient);
ROUTER.post('/client/delete/:email', deleteClient);


module.exports = ROUTER;
