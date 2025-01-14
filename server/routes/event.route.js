const express = require('express');
const {auth} = require('../middlewares/auth.middleware'); 
const upload = require("../middlewares/multer.middleware");

const {getAllEventsController, getEventBySlug, createEventController, myEventsController} = require("../controllers/event.controller");

const router = express.Router();

router.get("/", getAllEventsController) ;
router.post("/", upload.single('image'), createEventController);
router.get("/my", myEventsController);
router.get("/:slug", getEventBySlug);

module.exports = router ;