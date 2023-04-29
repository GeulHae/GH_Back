import { Router } from "express";
import donationService from "../services/donationService.js";

const donationRouter = express.Router();

// 0000 클릭 -> 기부 출력
donationRouter.get("/donations", async (req, res, next) => {
  try {
    await donationService.donationDetails();
    res.json({ message: "기부 정보 출력 완료" });
  } catch (err) {
    next(err);
  }
});

// 사용자 - 기부하기;
donationRouter.post("/donations", async (req, res, next) => {
  try {
    const { donationTitle, cost } = req.body;

    const newDonation = await donationService.addDonation({
      userId,
      donationTitle,
      cost,
    });
    res.status(201).json(newDonation);
  } catch (error) {
    next(error);
  }
});

// 사용자 - 기부 목록 조회
donationRouter.get("/donations/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const donationList = await donationService.readDonationList(userId);
    res.status(200).json(donationList);
  } catch (err) {
    next(err);
  }
});

module.exports = donationRouter;
