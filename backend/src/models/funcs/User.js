//예시
import db from "../index.js";
const userModel = db.user;
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

const User = {
  create: async ({ newUser }) => {
    const createdNewUser = await userModel.create(newUser);

    return createdNewUser;
  },
};

export default User;
