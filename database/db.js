import dotenv from 'dotenv';
dotenv.config();
import { set, connect } from 'mongoose';
import Users from '../models/Users.js';
import Services from '../models/Services.js';
import addAdmin from './dbAdmin.js'; // Agrega Admin
import addServices from './dbServices.js'; // Agrega los Servicios

set('strictQuery', false)

connect(process.env.URI) 
   .then(async()=> {
      const admin = await Users.findOne({email: process.env.ADMIN_EMAIL}).lean();
      const services = await Services.findOne().lean();
      if (!admin) {
         addAdmin()
         console.log('Administrador Creado');
      }
      if (!services) {
         addServices()
         console.log('Servicios Agregados');
      }
      console.log('DB Conectada🚀')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));