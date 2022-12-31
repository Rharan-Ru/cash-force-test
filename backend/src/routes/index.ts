import { Router } from 'express'
import BuyerRouter from './BuyerRouter'
import CNPJRouter from './CNPJRouter'
import OfferRouter from './OfferRouter'
import OrderPortionRouter from './OrderPortionRouter'
import OrderRouter from './OrderRouter'
import ProviderRouter from './ProviderRouter'
import SponsorRouter from './SponsorRouter'
import UserRouter from './UserRouter'

const router = Router()

router.use('/buyer', BuyerRouter)
router.use('/cnpj', CNPJRouter)
router.use('/offer', OfferRouter)
router.use('/order-portion', OrderPortionRouter)
router.use('/order', OrderRouter)
router.use('/provider', ProviderRouter)
router.use('/sponsor', SponsorRouter)
router.use('/user', UserRouter)

export default router