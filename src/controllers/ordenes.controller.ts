import { Request, Response } from "express";
import { OrdenesSchema } from "../model/ordenes.schema";
import  Productos  from "../model/productoModel";

export const addOrdenes = (req: Request, res: Response) => {
  OrdenesSchema.create({
    nombreCliente: req.body.nombreCliente,
    direccion: req.body.direccion,
    montoPagar: req.body.montoPagar,
    estadoOrden: req.body.estadoOrden,
    productos: req.body.productos
  })
    .then(updateResponse => {
      res.send({ updateResponse });
      res.end();
    }).catch(error => {
      res.send({ message: 'Hubo un error al actualizar', error }); // shorthand
      res.end();
    });
};

export const getOrdenes = async (req: Request, res: Response) => {
  try {
    const ordenes = await OrdenesSchema.find({}).populate('productos');
    res.json(ordenes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los ordenes');
  }
};
