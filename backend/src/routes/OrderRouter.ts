import { Router } from 'express'
import OrderController from '../controllers/OrderController'

const OrderRouter = Router()

OrderRouter.get('/', OrderController.index)

OrderRouter.get('/:id', OrderController.details)

OrderRouter.post('/', OrderController.create)

OrderRouter.put('/:id', OrderController.update)

OrderRouter.delete('/:id', OrderController.remove)


export default OrderRouter