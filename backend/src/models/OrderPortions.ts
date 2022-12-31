import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../database/config'
import Order from './Orders';

interface OrderPortionAttributes {
  id: number;
  nDup: string;
  dVenc: string;
  vDup: string;
  availableToMarket: boolean;
  orderId: number;
}

export type OrderPortionInput = OrderPortionAttributes
export type OrderPortionOuput = Required<OrderPortionAttributes>

class OrderPortion extends Model<OrderPortionAttributes, OrderPortionInput> implements OrderPortionAttributes {
    public id!: number;
    public nDup!: string;
    public dVenc!: string;
    public vDup!: string;
    public availableToMarket!: boolean;
    public orderId!: number;
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  OrderPortion.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nDup: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dVenc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vDup: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    availableToMarket: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references: { model: "orders", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'orderportions'
  })
  
OrderPortion.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order'
});

export default OrderPortion