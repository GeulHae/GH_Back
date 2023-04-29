// import productModel from "../db/models/productModel"; // model 위치 재확인
// import exchangeModel from "../db/models/exchangeModel"; // model 위치 재확인

class ExchangeService {
  constructor(productModel, exchangeModel) {
    this.productModel = productModel;
    this.exchangeModel = exchangeModel;
  }

  async addExchange(exchangeInfo) {
    const createdNewExchange = await this.exchangeModel.create(exchangeInfo);

    return createdNewExchange;
  }

  async getExchangesByUserId(userId) {
    const exchanges = await this.exchangeModel.findAllByUserId(userId);

    if (!exchange) {
      throw new Error("아직 구매하신 상품이 없습니다. 지구환경 지킴이가 되어보세요!");
    }

    return exchanges;
  }
}

const exchangeService = new ExchangeService(exchangeModel);

module.exports = { exchangeService };
