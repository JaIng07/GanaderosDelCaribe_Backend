import { Request, Response } from "express"
import AppDataSource from "../database/config"
import Inventory from "../entities/Inventory.entities"

export const getInventory = async (req: Request, res: Response) => {

  try {
    const inventory = await AppDataSource.getRepository(Inventory).find()
    res.json({
      ok: true,
      message: "Lista de inventario",
      inventory: inventory
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error al obtener el inventario",
      error: error
    })
  }

}

export const getItemInventory = async (req: Request, res: Response) => {

  try {
    const { idItem } = req.params
    const inventory = await AppDataSource.getRepository(Inventory).findOne({ where: { id: idItem } })
    res.json({
      ok: true,
      message: "Item del inventario",
      inventory: inventory
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error al obtener el item del inventario",
      error: error
    })
  }

}

export const postItemInventory = (req: Request, res: Response) => {

  try {

    const { type, amount, description, name } = req.body

    const inventory = new Inventory()
    inventory.type = type
    inventory.amount = amount
    inventory.description = description
    inventory.name = name
    AppDataSource.manager.save(inventory)

    res.json({
      ok: true,
      message: "Se ha creado correctamente el item del inventario",
      inventory: inventory
    })

  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error al crear el item del inventario",
      error: error
    })
  }
}

export const putItemInventory = async (req: Request, res: Response) => {
  try {

    const { idItem } = req.params
    const { id, ...rest } = req.body

    const userRepository = AppDataSource.getRepository(Inventory)
    await userRepository.update(idItem, rest)

    res.json({
      ok: true,
      message: "Se ha actualizado correctamente el item del inventario",
    })

  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error al actualizar el item del inventario",
      error: error
    })
  }
}

export const deleteItemInventory = async (req: Request, res: Response) => {
  try {

    const { idItem } = req.params

    const userRepository = AppDataSource.getRepository(Inventory)
    await userRepository.delete(idItem)

    res.json({
      ok: true,
      message: "Se ha eliminado correctamente el item del inventario",
    })

  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "Error al eliminar el item del inventario",
      error: error
    })
  }
}


