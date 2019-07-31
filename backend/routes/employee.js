var express = require("express");
var router = express.Router();
var cors = require("cors");
var db = require("diskdb");
var path = require("path");
var _ = require("lodash");

var employeesJson = require("../json/employees.json");
// post employee

router.post("/add-emp", cors(), function(req, res, next) {
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
  db.employees.save(req.body);
  res.status(200).send({ status: 200, message: "Created success" });
  res
    .status(401)
    .send({ status: 401, message: "internal error", type: "internal" });
});

// Get employees
router.get("/get-emp", cors(), function(req, res, next) {
  res.send(employeesJson);
});

//get employeeDetails
router.get('/view-emp/:id', cors(), function(req, res){
  var empId = req.params.id;
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
   var optinData = db.employees.findOne({id: empId});
   res.send(optinData);
});
module.exports = router;
