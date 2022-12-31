import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../database/config'

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
  mobile?: string;
  departament?: string;
  verificationCode?: string;
  emailChecked?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  cashforceAdm?: boolean
}

export type UserInput = UserAttributes
export type UserOuput = Required<UserAttributes>

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number
    public name!: string;
    public email!: string;
    public phoneNumber!: string;
    public mobile!: string;
    public departament!: string;
    public verificationCode!: string;
    public emailChecked!: boolean;
    public cashforceAdm!: boolean
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  User.init({
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    departament: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    verificationCode: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
    emailChecked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    cashforceAdm: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'users'
  })
  
export default User