const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).send({ message: "Please enter your email and password." });
  }

  const checkUser = await User.findOne({ email: email });

  if (checkUser) {
    if (password === checkUser.password) {
      res.status(200).send({ message: "User Logged In Successful" });
    } else {
      res.status(400).send({ message: "Invalid Credentials" });
    }
  } else {
    res.status(401).send({ message: "User Not Found" });
  }
});

module.exports = loginController;
