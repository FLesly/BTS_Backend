import { Request, Response } from "express";
import { CategoriasSchema } from "../model/categorias.schema";

export const getCategorias = (req: Request, res: Response) => {
	CategoriasSchema.find()
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};