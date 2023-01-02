import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "ALLAN SOUZA",
          email: "allan@cashforce.com.br",
          phoneNumber: "NULL",
          mobile: "NULL",
          departament: "NULL",
          verificationCode: "",
          emailChecked: 1,
          createdAt: "2020-10-01 21:31:37",
          updatedAt: "2020-10-01 22:41:23",
          cashforceAdm: 1
        },
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("users", {});
  }
};