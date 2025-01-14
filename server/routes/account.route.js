const express = require('express');
const {profileController} = require("../controllers/account.controller");
const {myEventsController, myJoinedEvents, registerForEventController} = require("../controllers/event.controller");


const router = express.Router() ;

router.get("/", profileController) ;
router.get("/myevents", myEventsController) ;
router.get("/joinedevents", myJoinedEvents) ;
router.post("/registerevent", registerForEventController) ;

module.exports = router ;