import mongoose  from "mongoose";
import { Categorias } from "./categorias.model";
import { Productos } from "./productoModel";

mongoose.set('strictQuery', false);

const schema = new mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  nombreCategoria: String,
  imgCategoria: String,
  productos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Productos'
  }]
});

export const CategoriasSchema = mongoose.model('categorias',schema);
