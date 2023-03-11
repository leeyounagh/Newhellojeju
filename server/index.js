const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./router/User");
const contentRouter = require("./router/Contents");
const communityRouter = require("./router/Community");

require("dotenv").config();
app.use(
  cors({
    origin: "*",
    credentials: true,
    // optionsSuccessStatus: 200,
  })
);
app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const uri = process.env.MONGOID;

mongoose
  .connect(uri)
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api/users", userRouter);
app.use("/api/contents", contentRouter);
app.use("/api/users/addcommunity", communityRouter);
app.use(express.static("uploads"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
