import { Router } from 'express'
import SponsorController from '../controllers/SponsorController'

const SponsorRouter = Router()

SponsorRouter.get('/', SponsorController.index)

SponsorRouter.get('/:id', SponsorController.details)

SponsorRouter.post('/', SponsorController.create)

SponsorRouter.put('/:id', SponsorController.update)

SponsorRouter.delete('/:id', SponsorController.remove)


export default SponsorRouter