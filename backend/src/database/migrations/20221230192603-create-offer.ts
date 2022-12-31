import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("offers", {
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
    return queryInterface.dropTable("offers");
  }
};