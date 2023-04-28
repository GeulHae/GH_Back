import { Router } from "express";
import userService from "../services/userService.js";

const userRouter = express.Router();

// 회원가입
userRouter.post(
  "/register",
  body("email").isEmail().withMessage("이메일 형식이 올바르지 않습니다."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("비밀번호를 8자리 이상 입력해주세요"),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new Error(errors.errors[0].msg);
      }

      const { name, email, password } = req.body;

      const newUser = await userService.addUser({
        name,
        email,
        password,
      });

      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

// 사용자 정보 조회
userRouter.get("/", userMiddleware.verifyUser, userController.configUser);

// 사용자 정보 수정
userRouter.put(
  "/",
  userMiddleware.verifyUser,
  userMiddleware.preventAdmin,
  userController.editUser
);

// 사용자 정보 삭제
userRouter.delete(
  "/",
  userMiddleware.verifyUser,
  userMiddleware.preventAdmin,
  userController.deleteUser
);
module.exports = userRouter;
