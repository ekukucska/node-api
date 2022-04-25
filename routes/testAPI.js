var express = require("express");
var router = express.Router();

/* GET testAPI response. */
router.get("/", function(req, res, next) {
  res.send("testAPI response");
});

module.exports = router;
