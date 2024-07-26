const express = require("express");
const app = express();

app.use(express.json());
app.use(express.json({ extended: false }));

// app.use("/", (req, res, next) => {
//   // res.send("From Express Server");
//   console.log("passing to the next midleware");
//   next();
// });
// app.use("/product", (req, res, next) => {
//   console.log("I'm Product middleware");
//   next();
// });

// app.use("/user", (req, res, next) => {
//   // res.send("From Express Server");
//   console.log("user middleware");
//   next();
// });

// app.use("/product/singleproduct", (req, res) => {
//   console.log("I'm single Product middleware");

//   res.send("From Product Server");
// });

app.use("/product", require("./ProductRouter"));

console.log("i'm in server room middleware");
const port = 3000;
app.listen(port, () => {
  console.log("Express server is running");
});
