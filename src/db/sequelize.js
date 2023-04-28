// db/sequelize.js
// 예시이기에 변경예정

const { Sequelize } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    //   timezone: '+09:00', //한국 시간대
    logging: false,
    // define: {
    //   timestamps: false // true이면 createdAt, updatedAt 컬럼을 자동으로 생성
    // }
  }
);

module.exports = sequelize;
