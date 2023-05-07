import mongoose  from "mongoose";
import {  OrdenesPendientes } from "./ordenes.model";

const schema = new mongoose.Schema<OrdenesPendientes>({
    //_id: mongoose.Types.ObjectId,
    nombreCliente: String,
    direccion : String,
    montoPagar: Number,
    estadoOrden: String,
    productos: Array<object>,
 
});

export const OrdenesSchema = mongoose.model('ordenes',schema);
