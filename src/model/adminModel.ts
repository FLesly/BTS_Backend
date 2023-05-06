import mongoose  from "mongoose";

interface Admin extends Document {
  correo: string;
  contraseña: string;
}


const adminSchema = new mongoose.Schema({
    correo: {
        type: String,
        required: true,
        unique: true,
      },
      contraseña: {
        type: String,
        required: true,
      },
  });
  


export const Admin = mongoose.model('administradores',adminSchema);
