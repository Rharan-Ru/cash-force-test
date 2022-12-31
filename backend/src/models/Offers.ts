import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../database/config'
import Order from './Orders';
import Sponsor from './Sponsors';

interface OfferAttributes {
  id: number;
  tax: string,
  tariff: string,
  adValorem: string,
  float: string,
  iof: string,
  expiresIn: Date,
  paymentStatusSponsor: boolean,
  paymentStatusProvider: boolean,
  orderId: number,
  sponsorId: number
}

export type OfferInput = OfferAttributes
export type OfferOuput = Required<OfferAttributes>

class Offer extends Model<OfferAttributes, OfferInput> implements OfferAttributes {
    public id!: number
    public tax!: string
    public tariff!: string
    public adValorem!: string
    public float!: string
    public iof!: string
    public expiresIn!: Date
    public paymentStatusSponsor!: boolean
    public paymentStatusProvider!: boolean
    public orderId!: number
    public sponsorId!: number
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  Offer.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    tax: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tariff: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adValorem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    float: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iof: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    paymentStatusProvider: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: { model: "orders", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: { model: "sponsors", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'offers'
  })

Offer.belongsTo(Order, {
    foreignKey: 'orderId',
    as: 'order'
});

Offer.belongsTo(Sponsor, {
  foreignKey: 'sponsorId',
  as: 'sponsor'
});
  
export default Offer