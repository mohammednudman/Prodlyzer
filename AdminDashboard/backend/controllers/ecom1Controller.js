const asyncHandler = require("express-async-handler");
const { redisClient } = require("../config/redis");

const Product = require("../models/productClickModel");

const ecommerce_name = "ecommerce_1";
const getEcom1Product = asyncHandler(async (req, res) => {
  try {
    const response = await Product.find({
      ecommerce_name: "ecommerce_1",
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

const postEcom1Product = asyncHandler(async (req, res) => {
  const { pName, email } = req.body;

  const ipAddr = req.ip;
  console.log("Dashboard IP: " + ipAddr);

  const respo = await Product.find({
    product_name: pName,
    ecommerce_name: ecommerce_name,
  });

  if (respo.length != 0) {
    await Product.findOneAndUpdate(
      { product_name: pName, ecommerce_name: ecommerce_name },
      { $inc: { total_clicks: 1 } }
    );
  }

  const comb_1 = `${pName}:${ecommerce_name}:${ipAddr}:${email}`;
  const comb_2 = `${pName}:${ecommerce_name}:${email}`;
  const comb_3 = `${pName}:${ecommerce_name}:${ipAddr}`;

  try {
    if (
      (await redisClient.sadd([comb_1, comb_1])) &&
      (await redisClient.sadd([comb_2, comb_2])) &&
      (await redisClient.sadd([comb_3, comb_3]))
    ) {
      // Save the product unique click to mongodb
      const response = await Product.find({
        product_name: pName,
        ecommerce_name: ecommerce_name,
      });
      console.log(response);
      if (response.length != 0) {
        await Product.findOneAndUpdate(
          { product_name: pName, ecommerce_name: ecommerce_name },
          { $inc: { no_of_clicks: 1 } }
        );
      } else {
        await Product.create({
          product_name: pName,
          ecommerce_name: ecommerce_name,
          no_of_clicks: 1,
        }).then(() => {
          console.log("Product added successfully");
        });
      }
      res.status(200).send({ message: "Product updated successfully" });
    } else {
      res.status(404).send({ message: "User is not unique" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  getEcom1Product,
  postEcom1Product,
};
