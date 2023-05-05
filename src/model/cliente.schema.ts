import mongoose  from "mongoose";
import {  Cliente, ordenes } from "./cliente.model";

const schema = new mongoose.Schema<Cliente>({
    _id: mongoose.Types.ObjectId,
    nombreCliente: String,
    apellidoCliente: String,
    correo: String,
    contraseña: String,
    ordenes: Array<ordenes>
});

export const ClienteSchema = mongoose.model('clientes',schema);


