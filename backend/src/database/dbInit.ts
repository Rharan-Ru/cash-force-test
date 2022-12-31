import Buyer from "../models/Buyers"
import CNPJ from "../models/CNPJs"
import Offer from "../models/Offers"
import OrderPortion from "../models/OrderPortions"
import Order from "../models/Orders"
import Provider from "../models/Providers"
import Sponsor from "../models/Sponsors"
import User from "../models/Users"

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(__dirname, '..', '.env')});

const isDev = process.env.NODE_ENV === 'development'
const dbInit = () => {
  Buyer.sync({ alter: isDev }),
  CNPJ.sync({ alter: isDev }),
  Offer.sync({ alter: isDev }),
  OrderPortion.sync({ alter: isDev }),
  Order.sync({ alter: isDev }),
  Provider.sync({ alter: isDev }),
  Sponsor.sync({ alter: isDev }),
  User.sync({ alter: isDev })
}

export default dbInit 