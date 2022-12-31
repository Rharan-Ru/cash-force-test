import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("cnpjs", {
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("cnpjs");
  }
};