const express = require("express");

exports.GetAllProducts = async (req, res) => {
  const productList = ["Chair", "table"];
  res.send(productList);
};
exports.AddProduct = async (req, res) => {
  const data = req.body;
  const products = data.products;
  const category = data.Category;
  console.log(products);
  res.json({ Product: products, Category: category });
};

// exports.AddProducts = async (req, res) => {
//   const data = req.body;
//   const productList = data.products;
//   res.send(productList);
// };
