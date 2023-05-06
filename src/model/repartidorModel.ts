import mongoose, { Document, Model } from "mongoose";
import { OrdenesPendientes } from "./ordenes.model";

// Interfaz para el modelo de repartidor
interface Repartidor extends Document {
  nombre: string;
  correo: string;
  contraseña: string;
  telefono: string;
  ordenesPendientes: OrdenesPendientes[];
}

// Esquema para el modelo de repartidor
const RepartidorSchema = new mongoose.Schema<Repartidor>({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  contraseña: { type: String, required: true },
  telefono: { type: String, required: true },
  ordenesPendientes: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrdenesPendientes" }]
});

// Exportar el modelo de repartidor
const Repartidor: Model<Repartidor> = mongoose.model("Repartidor", RepartidorSchema);
export default Repartidor;