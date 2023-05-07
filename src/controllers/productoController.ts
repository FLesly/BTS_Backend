import { Request, Response } from "express";
import Productos from "../model/productoModel";
import ProductosSchema from "../model/productoModel";
import { CategoriasSchema } from "../model/categorias.schema";


export const agregarProductos = async (req: Request, res: Response) => {
  try {
    const { nombreProducto, imgProducto, descripcion, precio } = req.body;
    const categoriaId = req.params.id;

    //Buscar la categoría por su ID
    const categoria = await CategoriasSchema.findById(categoriaId);

    if (categoria) {
      //Crear el nuevo producto y guardarlo en la base de datos
      const nuevoProducto = new ProductosSchema({
        nombreProducto,
        imgProducto,
        descripcion,
        precio,
      });
      await nuevoProducto.save();

      //Agregar el ID del nuevo producto a la lista de productos de la categoría jajaqloco
      categoria.productos.push(nuevoProducto._id);
      await categoria.save();

      res.send("Producto registrado exitosamente");
    } else {
      res.status(404).send("No se encontró la categoría");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al registrar producto");
  }
};



const obtenerProductos = async (req: Request, res: Response) => {
  try {
    const productos = await Productos.find({});
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los repartidores');
  }
};

export { obtenerProductos };


export const eliminarProducto = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const productoEliminado = await Productos.findByIdAndDelete(_id);
    if (!productoEliminado) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    //Obtener la categoría que contiene el producto
    const categoria = await CategoriasSchema.findOne({ productos: _id });
    if (!categoria) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    //Eliminar el ID del producto de la lista de productos en la categoría
    categoria.productos = categoria.productos.filter(p => p.toString() !== _id);

    //Guardar la categoría actualizada en la base de datos jijiji
    await categoria.save();

    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error al eliminar el producto', error });
  }
};

export const putProducto = (req: Request, res: Response) => {
   ProductosSchema.updateOne({_id: req.params.id},
    {
      $set: { 
          cantidad: req.body.cantidad 
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

export const obtenerProducto = async (req: Request, res: Response) => {
  try {
    const productos = await Productos.find({_id: req.params.id});
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los repartidores');
  }
};