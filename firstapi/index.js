// importing express .js
const express = require("express");

// creating an instance of express
const app = express();

// create router instance for routing from express
const router = express.Router();

router.get("/pradeep", function (req, res) {
  const name = req.query.product;
  res.send({ status: "ok", message: name });
  console.log(name);
});
// global middleware for all api calling defined with router
app.use("/", router);
app.listen(8000, function () {
  console.log("server start at port", 8000);
});
