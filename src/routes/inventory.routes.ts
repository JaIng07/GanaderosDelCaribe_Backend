import { Router } from "express";
import { deleteItemInventory, getInventory, getItemInventory, postItemInventory, putItemInventory } from '../controllers/inventory.controllers'
import { deleteItemInventoryValidators, getInventoryValidators, getItemInventoryValidators, postItemInventoryValidators, putItemInventoryValidators } from "../validators/inventory.validators";

const router = Router()

router.get('/', getInventoryValidators, getInventory)
router.get('/:idItem', getItemInventoryValidators, getItemInventory)
router.post('/', postItemInventoryValidators, postItemInventory)
router.put('/:idItem', putItemInventoryValidators, putItemInventory)
router.delete('/:idItem', deleteItemInventoryValidators, deleteItemInventory)

export default router;