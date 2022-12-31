import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../database/config'

interface CNPJAttributes {
  id: number;
  cnpj: string;
  companyType: string;
}

export type CNPJInput = CNPJAttributes
export type CNPJOuput = Required<CNPJAttributes>

class CNPJ extends Model<CNPJAttributes, CNPJInput> implements CNPJAttributes {
    public id!: number
    public cnpj!: string
    public companyType!: string;
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  CNPJ.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    companyType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    tableName: 'cnpjs'
  })
  
  export default CNPJ