const express = require('express');
const {loginController, registerController, guestRegisterController} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/guest-login", guestRegisterController);

module.exports = router; 