import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("orderportions", {
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
    return queryInterface.dropTable("orderportions");
  }
};