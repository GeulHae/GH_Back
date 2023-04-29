import express from "express";
// import db from "./models/index.js";
import userRouter from "./routes/userRouter.js";

db.sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스가 성공적으로 연결되었습니다.");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, world!!!");
});

app.use("/users", userRouter);
export default app;
