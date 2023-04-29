// import is from "@sindresorhus/is";    //TypeScript 유형검사 모듈
import { Router } from "express";
import { productService, exchangeService } from "../services/exchangeService.js";
import loginValidator from "../middleware/loginValidation";

const productRouter = express.Router();
const exchangeRouter = express.Router();

// 전체) 상품 페이지 출력
productRouter.get("/exchange/products",
  async function (req, res, next) {
    try {
      const products = await productService.getProducts();

      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
);

// point로 상품 구입
exchangeRouter.post("/exchange",loginValidator, 
  async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const { productId, cost } = req.body;

      // 구입 db에 추가
      const newExchange = await exchangeService.addExchange({
        userId,
        productId,
        // cost,
      });

      res.status(201).json(newExchange);
    } catch (error) {
      next(error);
    }
  }
);

// 회원) 상품 구입 정보 조회
exchangeRouter.get("/exchanges",loginValidator,
  async function (req, res, next) {
    try {
      const userId = req.params.currentUserId;
      const exchanges = await exchangeService.getExchangesByUserId(userId);

      res.status(200).json(exchanges);
    } catch (error) {
      next(error);
    }
  }
);


exports = { productRouter, exchangeRouter };
