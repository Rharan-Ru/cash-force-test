import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("providers", {
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
      bank: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null
      },
      bankAgency: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null
      },
      account: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null
      },
      documents: {
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
      email: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null
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
    return queryInterface.dropTable("providers");
  }
};