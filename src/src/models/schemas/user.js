const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
      phone: {
        type: DataTypes.STRING(15),
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      login_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      create_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      update_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deleted_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,            // createAt & updateAt 활성화
      underscored: true,           // sequelize기본 카멜 -> 스네이크케이스
      modelName: 'User',
      tableName: 'users',
      // paranoid: false,             // 실제 삭제X, deleteAt 컬럼에 timestamp값
      charset: 'utf8',             // 한국어 설정     
      collate: 'utf8_general_ci',  // 한국어 설정
      freezeTableName: true,       // 테이블 이름 변동없이 고정
    });
  }
    static associate(db) {}
};

module.exports = User;
