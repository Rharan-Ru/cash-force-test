import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../database/config'
import CNPJ from './CNPJs';

interface BuyerAttributes {
  id: number;
  name: string;
  tradingName: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  createdAt?: Date;
  updatedAt?: Date;
  cnpjId?: number;
  confirm?: boolean;
  email?: string;
}

export type BuyerInput = BuyerAttributes
export type BuyerOuput = Required<BuyerAttributes>

class Buyer extends Model<BuyerAttributes, BuyerInput> implements BuyerAttributes {
    public id!: number
    public name!: string
    public tradingName!: string;
    public cashforceTax!: string;
    public responsibleName!: string;
    public responsibleEmail!: string;
    public responsiblePosition!: string;
    public responsiblePhone!: string;
    public responsibleMobile!: string;
    public website!: string;
    public postalCode!: string;
    public address!: string;
    public number!: string;
    public complement!: string;
    public neighborhood!: string;
    public city!: string;
    public state!: string;
    public phoneNumber!: string;
    public situation!: string;
    public situationDate!: string;
    public cnpjId!: number;
    public confirm!: boolean;
    public email!: string;
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  Buyer.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tradingName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
    cashforceTax: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    responsibleName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    responsibleEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    responsiblePosition: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    responsiblePhone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    responsibleMobile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    number: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    situation: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    situationDate: {
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
    confirm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'buyers'
  })

Buyer.belongsTo(CNPJ, {
    foreignKey: 'cnpjId',
    as: 'cnpj'
});
  
export default Buyer