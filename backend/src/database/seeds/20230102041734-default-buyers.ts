import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "buyers",
      [
        {
          id: 1,
          name: "SACADO 001",
          tradingName: "SACADO 001 LTDA",
          cashforceTax: "0",
          responsibleName: "NULL",
          responsibleEmail: "NULL",
          responsiblePosition: "NULL",
          responsiblePhone: "NULL",
          responsibleMobile: "NULL",
          website: "NULL",
          postalCode: "NULL",
          address: "NULL",
          number: "NULL",
          complement: "NULL",
          neighborhood: "NULL",
          city: "NULL",
          state: "NULL",
          phoneNumber: "NULL",
          situation: "NULL",
          situationDate: "NULL",
          createdAt: new Date(),
          updatedAt: new Date,
          cnpjId: 1,
          confirm: 1,
          email: "NULL"
        },
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("buyers", {});
  }
};