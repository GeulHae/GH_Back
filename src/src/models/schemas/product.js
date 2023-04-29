const Sequelize = require('sequelize');

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image_key: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Product',
      tableName: 'product',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
    });
  }
    static associate(db) {
      model.product.belongsTo(model.exchange, {foreignKey: 'Exchange_id'})
    }
};

module.exports = Product;
