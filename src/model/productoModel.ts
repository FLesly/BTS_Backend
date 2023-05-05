import mongoose, { Document, Model } from "mongoose";


export interface Productos extends Document {
    nombre: string;
    imgProducto: string;
    descripcion: string;
    precio: number;
  }

const ProductosSchema = new mongoose.Schema<Productos>({
    //id: { type: Number, unique: true },
    nombre: { type: String, required: true },
    imgProducto: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
  
  });

const Productos: Model<Productos> = mongoose.model("Productos", ProductosSchema);
export default Productos;