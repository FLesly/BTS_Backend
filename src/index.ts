import express, { Express } from "express";
import dotenv from "dotenv";
import { Database } from "./utils/database";
import cors from 'cors';
import clienteRouter from "./routers/cliente.router";
import categoriasRouter from "./routers/categorias.router";
import ordenesRouter from "./routers/ordenes.router";
import repartidoresRouter from "./routers/repartidoresRouter";
import productosRouter from "./routers/productosRouter";
import adminRouter from "./routers/adminRouter";
import bodyParser from 'body-parser';


dotenv.config();
const database:Database = new Database(); 
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use('/categorias', categoriasRouter);
app.use('/ordenes', ordenesRouter);
app.use('/clientes', clienteRouter)
app.use('/repartidores', repartidoresRouter);
app.use('/productos', productosRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
	console.log(`Servidor modificado https://localhost:${port}`);
});
