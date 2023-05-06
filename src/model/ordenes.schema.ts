import mongoose  from "mongoose";
import {  OrdenesPendientes, productos } from "./ordenes.model";
import { Productos } from "./productoModel";

const schema = new mongoose.Schema<OrdenesPendientes>({
    //_id: mongoose.Types.ObjectId,
    nombreCliente: String,
    direccion : String,
    montoPagar: Number,
    estadoOrden: String,
    productos: Array<productos>,
 
});

export const OrdenesSchema = mongoose.model('ordenes',schema);
