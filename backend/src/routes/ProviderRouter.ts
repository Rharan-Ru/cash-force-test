import { Router } from 'express'
import ProviderController from '../controllers/ProviderController'

const ProviderRouter = Router()

ProviderRouter.get('/', ProviderController.index)

ProviderRouter.get('/:id', ProviderController.details)

ProviderRouter.post('/', ProviderController.create)

ProviderRouter.put('/:id', ProviderController.update)

ProviderRouter.delete('/:id', ProviderController.remove)


export default ProviderRouter