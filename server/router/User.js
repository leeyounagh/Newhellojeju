const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { User } = require("../models/User");

router.get("/auth", auth, (req, res) => {
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

router.post("/register", async (req, res) => {
  const user = await new User(req.body);

  await user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await User.findOne({ email: email }, (err, user) => {
      if (!user) {
        res.json({
          loginSuccess: false,
          message: "제공된 이메일에 해당하는 유저가 없습니다.",
        });
        next();
      }

      user.comparePassword(password, (err, isMatch) => {
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 틀렸습니다.",
          });
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);

          res
            .cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id });
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/addToGood", auth, async (req, res) => {
  const { _id } = req.user;
  const { contentsId, image, address, title } = req.body;

  await User.findOne({ _id: _id }, (err, userInfo) => {
    let duplicate = false;
    //가져온 정보에서 카트에다 넣으려하는 상품이 이미 들어있는지 확인
    userInfo.good.forEach((item) => {
      if (item.id === req.body.productId) {
        duplicate = true;
      }
    });
    //상품이 이미 있을때
    if (duplicate) {
      User.findOneAndUpdate({
        _id: req.user._id,
        "good.id": req.body.productId,
      }),
        { $inc: { "good.$.quantity": 1 } },
        { new: true },
        async (err, userInfo) => {
          if (err) return await res.status(400).json({ success: false, err });
          res.status(200).send(userInfo.good);
        };
    }
    //상품이 이미 있지않을때
    else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            good: {
              id: contentsId,
              quantity: 1,
              image: image,
              address: address,
              title: title,

              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.status(400).json({ success: false, err });
          res.status(200).send(userInfo.good);
        }
      );
    }
  });
});

router.get("/logout", auth, async (req, res) => {
  const { _id } = req.user;
  await User.findOneAndUpdate({ _id: _id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

router.post("/addschedule", auth, async (req, res) => {
  const { writer, title, desc, style, startDate, endDate, id } = req.body;
  await User.findOne({ _id: req.user._id }, (err, userInfo) => {
    User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          schedule: {
            writer: writer,
            title: title,
            desc: desc,
            style: style,
            startDate: startDate,
            endDate: endDate,
            id: id,
            date: Date.now(),
          },
        },
      },
      { new: true },
      (err, userInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, userInfo });
      }
    );
  });
});

router.get("/removefromschedule", auth, async (req, res) => {
  const userId = req.user._id;
  const { id } = req.query;
  await User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: { schedule: { id: id } },
    },
    { new: true },
    (err, userInfo) => {
      let scd = userInfo.schedule;

      if (err) return res.status(400).json({ success: false, err });
      res.status(200).send(scd);
    }
  );
});
router.get("/removeFromGood", auth, async (req, res) => {
  const userId = req.user._id;
  const { id } = req.query;
  await User.findOneAndUpdate(
    { _id: userId },
    {
      $pull: { good: { id: id } },
    },
    { new: true },
    (err, userInfo) => {
      let cart = userInfo.good;

      if (err) return res.status(400).json({ success: false, err });
      res.status(200).send(cart);
    }
  );
});

router.post("/addToStyle", auth, async (req, res) => {
  const userId = req.user._id;
  const UserStyle = req.body.UserStyle;
  await User.findOne({ _id: userId }, (err, userInfo) => {
    User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          userStyle: UserStyle,
        },
      },
      { new: true },
      (err, userInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, userInfo });
      }
    );
  });
});
module.exports = router;
