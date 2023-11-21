import { Request, Response } from "express";
import AppDataSource from "../database/config";
import Ecommerce from "../entities/Ecommerce.entities";

const allowedUnits = ['Cabezas', 'Litros', 'Kilogramos', 'Gramos', 'Docenas', 'Unidades', 'Metros cuadrados']


export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const response = await AppDataSource.getRepository(Ecommerce).find()
    return res.status(200).json({
      message: "Se han obtenido todos los productos correctamente",
      products: response
    })
  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al obtener los productos",
      error: error
    })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  const { idProduct } = req.params
  try {
    const response = await AppDataSource.getRepository(Ecommerce).findOne({ where: { id: idProduct } })
    return res.status(200).json({
      message: "Se ha obtenido el producto correctamente",
      product: response
    })
  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al obtener el producto",
      error: error
    })
  }
}

export const postProduct = async (req: Request, res: Response) => {
  const { productName, price, description, date, stock, unit } = req.body

  try {
    const product = new Ecommerce()
    product.productName = productName
    product.price = price
    product.description = description
    product.date = date
    product.img = "https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-product-sale-pattern-image_1283303.jpg"
    product.stock = stock
    product.unit = allowedUnits.includes(unit) ? unit : "Unidades"

    const response = await AppDataSource.getRepository(Ecommerce).save(product)

    return res.status(200).json({
      message: "Se ha creado el producto correctamente",
      product: response
    })
  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al crear el producto",
      error: error
    })
  }
}

export const putProduct = async (req: Request, res: Response) => {

  const { idProduct } = req.params
  const { id, unit, ...rest } = req.body


  if (unit) {
    allowedUnits.includes(unit) ? rest.unit = unit : rest.unit = "Unidades"
  }

  try {

    const animalRepository = await AppDataSource.getRepository(Ecommerce)
    await animalRepository.update(idProduct, rest)

    return res.status(200).json({
      message: "Se ha actualizado el producto correctamente",
    })
  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al actualizar el producto",
      error: error
    })
  }

}

export const deleteProduct = async (req: Request, res: Response) => {

  const { idProduct } = req.params

  try {

    const animalRepository = await AppDataSource.getRepository(Ecommerce)
    await animalRepository.delete(idProduct)

    return res.status(200).json({
      message: "Se ha eliminado el producto correctamente",
    })
  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al eliminar el producto",
      error: error
    })
  }

}
