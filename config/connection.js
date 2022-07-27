const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("text_to_image_db", "root", "", {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
        port: 3306,
      },
    });

module.exports = sequelize;
