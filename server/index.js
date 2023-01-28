const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRouter = require("./router/User");
const contentRouter = require("./router/Contents");
const communityRouter = require("./router/Community");
const { auth } = require("./middleware/auth");
require("dotenv").config();

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
app.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
    good: req.user.good,
    history: req.user.history,
    schedule: req.user.schedule,
    UserStyle: req.user.userStyle,
  });
});

app.use("/api/users", userRouter);
app.use("/api/contents", contentRouter);
app.use("/api/users/addcommunity", communityRouter);
app.use(express.static("uploads"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
