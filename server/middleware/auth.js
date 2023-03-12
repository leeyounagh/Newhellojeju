const { User } = require("../models/User");

let auth = async (req, res, next) => {
  try {
    let token = req.cookies.x_auth;
    console.log(req.Cookies, req.cookies, token);
    await User.findByToken(token, (err, user) => {
      if (err) throw err;
      console.log(user, token);
      if (!user) return res.json({ isAuth: false, err: true });
      req.token = token;
      req.user = user;
      next();
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { auth };
