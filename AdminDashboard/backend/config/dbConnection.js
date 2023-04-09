const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async () => {
  try {
    mongoose
      .connect('mongodb+srv://hustler2801:LkAYOcrDxVL2oIVx@cluster0.xye7m9m.mongodb.net/ecommerce?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
      })
      .then(() =>
        console.log(
          "==============Mongodb Database Connected Successfully=============="
        )
      )
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;
