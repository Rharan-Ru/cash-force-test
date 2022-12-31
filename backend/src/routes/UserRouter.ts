import { Router } from 'express'
import UserController from '../controllers/UserController'

const UserRouter = Router()

UserRouter.get('/', UserController.index)

UserRouter.get('/:id', UserController.details)

UserRouter.post('/', UserController.create)

UserRouter.put('/:id', UserController.update)

UserRouter.delete('/:id', UserController.remove)


export default UserRouter