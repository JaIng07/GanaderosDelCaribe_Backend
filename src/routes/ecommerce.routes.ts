import { Router } from "express";
import { deleteProduct, getAllProducts, getProductById, postProduct, putProduct } from "../controllers/ecommerce.controllers";
import { deleteProductValidators, getProductByIdValidators, postProductValidators, putProductValidators } from "../validators/ecommerce.validators";

const router = Router();

router.get('/', getAllProducts);
router.get('/:idProduct', getProductByIdValidators, getProductById);
router.post('/', postProductValidators, postProduct);
router.put('/:idProduct', putProductValidators, putProduct)
router.delete('/:idProduct', deleteProductValidators, deleteProduct)

export default router;