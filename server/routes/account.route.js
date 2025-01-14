const express = require('express');
const {profileController} = require("../controllers/account.controller");
const {myEventsController} = require("../controllers/event.controller");


const router = express.Router() ;

router.get("/", profileController) ;
router.get("/myevents", myEventsController) ;

module.exports = router ;