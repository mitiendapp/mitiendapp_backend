import express, { Router,Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import  { envioCorreo } from '../controllers/correo.controller'

const ROUTER = Router();

ROUTER.post('/envio', envioCorreo);

module.exports = ROUTER;
