import { Request, Response } from "express";
import { ClienteSchema } from "../model/cliente.schema";
import mongoose from "mongoose";

export const postCliente = (req: Request, res: Response) => {
	ClienteSchema.create(
        {
        nombreCliente: req.body.nombreCliente,
        apellidoCliente: req.body.apellidoCliente,
        correo: req.body.correo,
        contraseña: req.body.contraseña
        }
    )
		.then(updateResponse => {
        res.send(updateResponse);
        res.end();
      })
      .catch(error=>{
        res.send({message: 'Hubo un error al actualizar', error}); // shorthand
        res.end();
      });
};
//obtener un cliente
export const getCliente = (req: Request, res: Response) => {
	ClienteSchema.findById(req.params.id)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};
//obtener todos los clientes
export const getClientes = (req: Request, res: Response) => {
	ClienteSchema.find()
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

export const addOrdenACliente = (req: Request, res: Response) => {
  ClienteSchema.updateOne({_id: req.params.id},
    {
      $push: { 
          ordenes: {
            _id: new mongoose.Types.ObjectId(req.body.id)
          } 
      }
    }
  ).then(result => {
    res.send({message: 'agregado', result});
    res.end();
  }).catch(error => {
    res.send({message: 'Ocurrio un error', error});
    res.end();
  })
};