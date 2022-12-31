import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("users", {
      id: {
        type: DataTypes.INTEGER,
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
    return queryInterface.dropTable("users");
  }
};