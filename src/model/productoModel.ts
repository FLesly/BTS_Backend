import mongoose, { Document, Model } from "mongoose";


export interface Productos extends Document {
    nombreProducto: string;
    imgProducto: string;
    descripcion: string;
    precio: number;
    cantidad: number;
  }

const ProductosSchema = new mongoose.Schema<Productos>({
    //id: { type: Number, unique: true },
    nombreProducto: { type: String, required: true },
    imgProducto: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad:{ type: Number, required: true },
  
  });

const Productos: Model<Productos> = mongoose.model("Productos", ProductosSchema);
export default Productos;
