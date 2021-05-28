const express = require("express");
const router = express.Router();
const usersCrtl = require("../controllers/users.js");

//GET
router.get("/checkuser", usersCrtl.checkUser);

//POST
router.post("/register", usersCrtl.register);
router.post("/login", usersCrtl.login);
router.post("/logout", usersCrtl.logout);

module.exports = router;
