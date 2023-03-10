import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join(__dirname, '..', '.env')});

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = process.env.DB_PASS
const dbPort = process.env.DB_PORT

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  port: Number(dbPort)
})

export default sequelizeConnection