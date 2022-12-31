import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("orders", {
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
    return queryInterface.dropTable("orders");
  }
};