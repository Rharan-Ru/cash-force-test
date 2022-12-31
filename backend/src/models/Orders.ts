import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../database/config'
import Buyer from './Buyers';
import CNPJ from './CNPJs';
import Provider from './Providers';
import User from './Users';

interface OrderAttributes {
  id: number;
  orderNfId: string;
  orderNumber: string;
  orderPath: string;
  orderFileName: string;
  orderOriginalName: string;
  emissionDate: string;
  pdfFile: string;
  emitedTo: string;
  nNf: string;
  CTE: string;
  value: string;
  cnpjId: number;
  userId: number;
  buyerId: number;
  providerId: number;
  orderStatusBuyer: string;
  orderStatusProvider: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;
}

export type OrderInput = OrderAttributes
export type OrderOuput = Required<OrderAttributes>

class Order extends Model<OrderAttributes, OrderInput> implements OrderAttributes {
    public id!: number;
    public orderNfId!: string;
    public orderNumber!: string;
    public orderPath!: string;
    public orderFileName!: string;
    public orderOriginalName!: string;
    public emissionDate!: string;
    public pdfFile!: string;
    public emitedTo!: string;
    public nNf!: string;
    public CTE!: string;
    public value!: string;
    public cnpjId!: number;
    public userId!: number;
    public buyerId!: number;
    public providerId!: number;
    public orderStatusBuyer!: string;
    public orderStatusProvider!: string;
    public deliveryReceipt!: string;
    public cargoPackingList!: string;
    public deliveryCtrc!: string;
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  Order.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    orderNfId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    orderPath: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    orderFileName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    orderOriginalName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    emissionDate: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    pdfFile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    emitedTo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nNf: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    CTE: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    value: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    cnpjId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: { model: "cnpjs", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
    buyerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: { model: "buyers", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
    providerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: { model: "providers", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
    orderStatusBuyer: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "0"
    },
    orderStatusProvider: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "0"
    },
    deliveryReceipt: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    cargoPackingList: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    deliveryCtrc: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'orders'
  })

Order.belongsTo(CNPJ, {
    foreignKey: 'cnpjId',
    as: 'cnpj'
});

Order.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

Order.belongsTo(Buyer, {
  foreignKey: 'buyerId',
  as: 'buyer'
});

Order.belongsTo(Provider, {
    foreignKey: 'providerId',
    as: 'provider'
});

export default Order