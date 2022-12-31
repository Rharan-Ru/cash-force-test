import { Router } from 'express'
import CNPJController from '../controllers/CNPJController'

const CNPJRouter = Router()

CNPJRouter.get('/', CNPJController.index)

CNPJRouter.get('/:id', CNPJController.details)

CNPJRouter.post('/', CNPJController.create)

CNPJRouter.put('/:id', CNPJController.update)

CNPJRouter.delete('/:id', CNPJController.remove)


export default CNPJRouter