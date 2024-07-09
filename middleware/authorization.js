// module.exports = async (req, res, next) => {
//   const data = req.body;
//   if (data.role == "Admin") {
//     next();
//   }
//   if (data.role !== "Admin") {
//     return res
//       .status(401)
//       .json({ msg: "you do not have the right authorization" });
//   }
// };
module.exports = async (req, res, next) => {
  const data = req.body;
  const role = data.userRole;
  if (role === "Admin") {
    next();
  }
  if (role !== "Admin") {
    res.status(500).send({ msg: "You are not Autjorized!" });
  }
};
