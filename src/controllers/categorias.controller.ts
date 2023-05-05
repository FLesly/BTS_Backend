import { Request, Response } from "express";
import { CategoriasSchema } from "../model/categorias.schema";

export const getCategorias = async (req: Request, res: Response) => {
	try {
	  const categorias = await CategoriasSchema.find().populate('productos');
	  res.send(categorias);
	} catch (error) {
	  console.error(error);
	  res.status(500).send("Error al obtener categorías");
	}
  };
  

export const getCategoriaPorId = async (req: Request, res: Response) => {
    try {
        const categoria = await CategoriasSchema.findById(req.params.id);
        res.send(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener la categoría");
    }
};


export const agregarCategoria = async (req: Request, res: Response) => {
	try {
	  const {  nombreCategoria, imgCategoria, producto } = req.body;
	  const nuevaCategoria = new CategoriasSchema({
		nombreCategoria, imgCategoria, producto
		});
	  
	  // Guardar el nuevo documento de repartidor en la base de datos
	  await nuevaCategoria.save();
  
	  res.status(201).send("Categoria agregada exitosamente");
	} catch (error) {
	  console.error(error);
	  res.status(500).send("Error al agregar Categoria");
	}
  };
  

  