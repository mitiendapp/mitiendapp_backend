import express, { Router,Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import  { envioCorreoCompany } from '../controllers/correoCompany.controller'

const ROUTER = Router();

ROUTER.post('/envioCompany', envioCorreoCompany);

module.exports = ROUTER;
