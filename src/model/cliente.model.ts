import mongoose from "mongoose";
import { productos } from "./ordenes.model";

export interface Cliente {
    _id?: mongoose.Types.ObjectId;
    nombreCliente:string;
    apellidoCliente: string;
    correo: string;
    contraseña: string;
    ordenes: Array<ordenes>;
}

export interface ordenes {
    _id?: mongoose.Types.ObjectId;
    direccion: string;
    montoPagar: string;
    productos :Array<productos>;
}