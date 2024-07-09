const express = require("express");
const { GetAllProducts, AddProduct } = require("./ProductController");
const router = express.Router();
const auth = require("./middleware/authorization");

router.get("/getallproduct/", GetAllProducts);
router.post("/addproduct", auth, AddProduct);

module.exports = router;
