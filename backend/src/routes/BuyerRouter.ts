import { Router } from 'express'
import BuyerController from '../controllers/BuyerController'

const BuyerRouter = Router()

BuyerRouter.get('/', BuyerController.index)

BuyerRouter.get('/:id', BuyerController.details)

BuyerRouter.post('/', BuyerController.create)

BuyerRouter.put('/:id', BuyerController.update)

BuyerRouter.delete('/:id', BuyerController.remove)


export default BuyerRouter