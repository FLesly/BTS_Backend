import mongoose from "mongoose";

export interface Categorias {
    _id?: mongoose.Types.ObjectId,
    nombreCategoria: string;
    imgCategoria: string;
    producto :Array<productos>;
}

export interface productos {
    nombreProducto: string;
   imgProducto: string;
   descripcion : string;
   precio: string;
 }