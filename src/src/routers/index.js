const userRouter = require("./userRouter");

router.use("/users", userRouter);
router.use("/donations", donaationRouter);

// export * from "./userRouter";
// export * from "./exchangeRouter";
// export * from "./donationRouter";
