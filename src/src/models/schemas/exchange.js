const Sequelize = require('sequelize');

class Exchange extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Exchange',
      tableName: 'exchange',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
    });
  }
    static associate(db) {
      model.exchange.hasMany(models.product, {foreignKey: "product_id"})
    }
};

module.exports = Exchange;