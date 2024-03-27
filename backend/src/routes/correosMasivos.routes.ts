import express, { Router,Request, Response } from 'express';
import * as nodemailer from 'nodemailer';
import  { getCorreos } from '../controllers/correosMasivos.controller'

const ROUTER = Router();

ROUTER.get('/correosMasivos', getCorreos);

module.exports = ROUTER;