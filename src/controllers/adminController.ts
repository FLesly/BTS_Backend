import { Request, Response } from "express";
import {Admin} from "../model/adminModel";

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { correo, contraseña } = req.body;

    const admin = await Admin.findOne({ correo });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (admin.contraseña !== contraseña) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({
      admin: {
        correo: admin.correo,
        contraseña: admin.contraseña,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
