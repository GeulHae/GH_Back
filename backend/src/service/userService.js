import User from "../models/funcs/User.js";
import bcrypt from "bcrypt";

const userService = {
  addUser: async ({ name, email, password }) => {
    const user = await User.findByEmail({ email });

    if (user) {
      throw new Error(
        "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요."
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const registerDate = new Date();

    const newUser = {
      user_id: userId,
      name,
      email,
      password: hashedPassword,
      create_date: createDate,
    };

    await User.create({ newUser });
    const data = {
      userId,
      name,
      email,
      password,
      create_date,
    };

    return { message: "success", data };
  },
};
