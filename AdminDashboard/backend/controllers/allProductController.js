const Product = require("../models/productClickModel");

const getAllProduct = async (req, res) => {
  await Product.aggregate([
    {
      $group: {
        _id: "$product_name",
        total_unique_clicks: { $sum: "$no_of_clicks" },
        total_clicks: { $sum: "$total_clicks" },
      },
    },
  ])
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = getAllProduct;
