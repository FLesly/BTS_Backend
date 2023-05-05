import mongoose from "mongoose";

export interface OrdenesPendientes {
    _id?: mongoose.Types.ObjectId,
    nombreCliente: string;
    direccion: string;
    montoPagar: string;
    productos :Array<productos>;
}
export interface productos {
    nombreProducto: string;
    precio: string;
 }