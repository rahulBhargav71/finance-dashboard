const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const { allowRoles } = require("../middleware/role");

const userCtrl = require("../controllers/userController");
const recordCtrl = require("../controllers/recordController");
const dashCtrl = require("../controllers/dashboardController");

router.post("/users", userCtrl.createUser);

router.post(
  "/records",
  auth,
  allowRoles("ADMIN"),
  recordCtrl.createRecord
);

router.get(
  "/records",
  auth,
  allowRoles("ADMIN", "ANALYST", "VIEWER"),
  recordCtrl.getRecords
);

router.put(
  "/records/:id",
  auth,
  allowRoles("ADMIN"),
  recordCtrl.updateRecord
);

router.delete(
  "/records/:id",
  auth,
  allowRoles("ADMIN"),
  recordCtrl.deleteRecord
);

router.get(
  "/dashboard",
  auth,
  allowRoles("ADMIN", "ANALYST"),
  dashCtrl.getSummary
);

module.exports = router;