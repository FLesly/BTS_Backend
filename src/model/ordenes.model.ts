import mongoose from "mongoose";

export interface OrdenesPendientes {
    //_id?: mongoose.Types.ObjectId,
    nombreCliente: string;
    direccion: string;
    montoPagar: string;
    estadoOrden: string;
    productos :Array<Object>;
    
}
