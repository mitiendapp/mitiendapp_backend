import { Router } from "express";
import { createClient } from "../controllers/client.controller";
const ROUTER = Router();

ROUTER.post('/createClient', createClient) // pendiente de cambiar

module.exports = ROUTER;
