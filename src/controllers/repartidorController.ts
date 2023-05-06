import { Request, Response } from "express";
import Repartidor from "../model/repartidorModel";


export const agregarRepartidor = async (req: Request, res: Response) => {
  try {
    const {id, nombre, correo, contraseña, telefono, ordenesPendientes} = req.body;
    const nuevoRepartidor = new Repartidor({
      nombre,
      correo,
      contraseña,
      telefono,
      ordenesPendientes
    });

    // Guardar el nuevo documento de repartidor en la base de datos
    await nuevoRepartidor.save();

    
    res.status(200).send("Repartidor agregado exitosamente");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar repartidor");
  }
};


//cuidado con esto Lesly pq hace dos lookups xd
export const obtenerRepartidores = async (req: Request, res: Response) => {
  try {
    // Obtener todos los repartidores y desenrollar sus ordenesPendientes con la opción preserveNullAndEmptyArrays
    const repartidores = await Repartidor.aggregate([
      {
        $unwind: {
          path: "$ordenesPendientes",
          preserveNullAndEmptyArrays: true 
        }
      },
      {
        $lookup: {
          from: "ordenes",
          localField: "ordenesPendientes",
          foreignField: "_id",
          as: "ordenesPendientes",
        },
      },
      {
        $unwind: {
          path: "$ordenesPendientes",
          preserveNullAndEmptyArrays: true //pa q los documentos con ordenesPendientes vacío también se muestren
        }
      },
      {
        $lookup: {
          from: "productos",
          localField: "ordenesPendientes.productos",
          foreignField: "_id",
          as: "ordenesPendientes.productos",
        },
      },
      {
        $group: {
          _id: "$_id",
          nombre: { $first: "$nombre" },
          correo: { $first: "$correo" },
          contraseña: { $first: "$contraseña" },
          telefono: { $first: "$telefono" },
          __v: { $first: "$__v" },
          ordenesPendientes: { $push: "$ordenesPendientes" },
        },
      },
    ]);

    res.json(repartidores);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los repartidores');
  }
};






export const eliminarRepartidor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Buscar el repartidor a eliminar en la base de datos
    const repartidor = await Repartidor.findById(id);

    // Si el repartidor no existe, devolver un error
    if (!repartidor) {
      return res.status(404).send("Repartidor no encontrado");
    }

    // Eliminar el repartidor de la base de datos
    await repartidor.remove();

    res.status(200).send("Repartidor eliminado exitosamente");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar repartidor");
  }
};


export const actualizarRepartidor = async (req: Request, res: Response) => {
  try {
    const { idRepartidor, idOrden } = req.body;
    const repartidor = await Repartidor.findById(idRepartidor);
    if (!repartidor) {
      return res.status(404).send("Repartidor no encontrado");
    }
    repartidor.ordenesPendientes.push(idOrden);
    await repartidor.save();
    res.status(200).send("Repartidor actualizado exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar repartidor");
  }
};


