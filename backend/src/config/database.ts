require("../bootstrap");

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_bin"
  },
  dialect: process.env.DB_DRIVER || "mysql",
  timezone: "-03:00",
  host: process.env.DB_HOST || 'mysqldb',
  database: process.env.DB_NAME || 'cash_db',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'cashforce',
  logging: false
};