const express = require("express");

exports.getallorder = async (req, res) => {
  const orderList = ["OrderA", "OrderB"]; /* get All Order From DB */
  res.json(orderList);
};
exports.addorder = async (req, res) => {
  const reqOrder = req.body;
  const totalPrice = reqOrder.totalPrice;
  //order will be added to the DB
  res.json(totalPrice);
};
