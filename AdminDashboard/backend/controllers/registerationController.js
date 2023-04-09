const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerController = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.status(400).send({ message: "Please enter all required fields" });
  }

  const checkUser = await User.findOne({ email: email });

  if (!checkUser) {
    await User.create({ name: name, email: email, password: password })
      .then(res.status(201))
      .send({ message: "User registered successfully" })
      .catch((err) => {
        console.error(err);
      });
  } else {
    res.status(400).send({ message: "User already registered" });
  }
});

module.exports = registerController;
