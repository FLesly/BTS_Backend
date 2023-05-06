import mongoose  from "mongoose";
import {  Cliente } from "./cliente.model";

const schema = new mongoose.Schema<Cliente>({
    //_id: mongoose.Types.ObjectId,
    nombreCliente: String,
    apellidoCliente: String,
    correo: String,
    contraseña: String,
    ordenes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Productos'
      }]
});

export const ClienteSchema = mongoose.model('clientes',schema);


