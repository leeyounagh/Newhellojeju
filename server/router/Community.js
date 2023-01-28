const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { Contents } = require("../models/Contents");

router.post("/", async (req, res) => {
  const contents = await new Contents(req.body);

  contents.save((err) => {
    if (err) return res.status.apply(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/letter", async (req, res) => {
  await Contents.find()
    .populate("writer")

    .exec((err, productInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, productInfo });
    });
});

router.get("/letter/letter_by_id", async (req, res) => {
  let productId = req.query.contentsid;

  await Contents.find({ _id: productId })
    .populate("writer")
    .exec((err, product) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ success: true, product });
    });
});

router.post("/letter/comment", auth, async (req, res) => {
  let productId = req.query.contentsid;

  await Contents.findOne({ _id: productId }, () => {
    Contents.findOneAndUpdate(
      { _id: productId },
      {
        $push: {
          comment: {
            writer: req.body.writer,
            comment: req.body.comment,
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

module.exports = router;
