
import { Request, Response } from "express";
import { OrdenesSchema } from "../model/ordenes.schema";

    export const addOrdenes = (req: Request, res: Response) => {
      OrdenesSchema.create({
      nombreCliente: req.body.nombreCliente,
      direccion : req.body.direccion ,
      montoPagar: req.body.montoPagar ,
      productos :req.body.productos
      })
      .then(updateResponse => {
        res.send({updateResponse});
        res.end();
      }).catch(error=>{
        res.send({message: 'Hubo un error al actualizar', error}); // shorthand
        res.end();
      });
      };