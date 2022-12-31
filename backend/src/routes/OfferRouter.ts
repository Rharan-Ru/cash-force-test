import { Router } from 'express'
import OfferController from '../controllers/OfferController'

const OfferRouter = Router()

OfferRouter.get('/', OfferController.index)

OfferRouter.get('/:id', OfferController.details)

OfferRouter.post('/', OfferController.create)

OfferRouter.put('/:id', OfferController.update)

OfferRouter.delete('/:id', OfferController.remove)


export default OfferRouter