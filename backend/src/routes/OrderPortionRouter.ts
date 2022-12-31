import { Router } from 'express'
import OrderPortionController from '../controllers/OrderPortionController'

const OrderPortionRouter = Router()

OrderPortionRouter.get('/', OrderPortionController.index)

OrderPortionRouter.get('/:id', OrderPortionController.details)

OrderPortionRouter.post('/', OrderPortionController.create)

OrderPortionRouter.put('/:id', OrderPortionController.update)

OrderPortionRouter.delete('/:id', OrderPortionController.remove)


export default OrderPortionRouter