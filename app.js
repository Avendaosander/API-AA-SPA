import express, { json, urlencoded } from 'express';
import routerAuth from "./routes/routerAuth.js";
import routerServices from "./routes/routerServices.js";
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
// MongoDB Connection
import './database/db.js';

// Cors
import cors from "cors";
const corsOptions = {
   credentials: true,
   origin: process.env.PATHCORS || '*',
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

// Settings
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use("/auth", routerAuth);
app.use("/services", routerServices);

export default app;