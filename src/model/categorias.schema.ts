import mongoose  from "mongoose";
import { Categorias, productos } from "./categorias.model";

const schema = new mongoose.Schema<Categorias>({
  _id: mongoose.Types.ObjectId,
  nombreCategoria: String,
    imgCategoria: String,
    producto :Array<productos>
});

export const CategoriasSchema = mongoose.model('categorias',schema);
