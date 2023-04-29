const Sequelize = require("sequelize");

class Donation extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        cost: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        image_key: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Donation",
        tableName: "donations",
        //paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
        freezeTableName: true,
      }
    );
  }
  static associate(db) {}
}

module.exports = Donation;
