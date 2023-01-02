import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      "cnpjs",
      [
        {
          id: 1,
          cnpj: '00000000000001',
          companyType: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          cnpj: '00000000000002',
          companyType: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("cnpjs", {});
  }
};