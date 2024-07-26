const express = require("express");
const router = express.Router();
const { getallorder, addorder } = require("./orderController");
const auth = require("./middleware/authorization");

router.get("/getallorder", auth, getallorder);
router.post("/addorder", addorder);

module.exports = router;
