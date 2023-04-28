const Sequelize = require('sequelize');

class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      product_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Product',
      tableName: 'products',
      // paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      freezeTableName: true,
    });
  }
    static associate(db) {}
};

module.exports = Product;
