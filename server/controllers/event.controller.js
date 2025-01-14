const Event = require("../models/event.model");

const logger = require("../utils/logger");
const cloudinary = require("../utils/cloudinary");

const getAllEventsController = async (req, res) =>{
    try {
        const result = await Event.find({}) ;
        return res.status(200).json(result);
    } catch (error) {
        logger.error(error.stack || error);
        return res.status(500).json({status:"error", message: "Unable to fetch events" })
    }
}

const getEventBySlug = async (req, res) =>{
    try {
        const slug = req.params.slug ;
        logger.info(slug) ;
        const result = await Event.findOne({ slug }) ;
        if(!result){
            return res.status(200).json({status:"error", message: "Event not found"});
        }
        return res.status(200).json(result);
    } catch (error) {
        logger.error(error.stack || error);
        return res.status(500).json({status:"error", message: "Unable to fetch event details" })
    }
}

const createEventController = async (req, res) =>{
    try {
        const {name, description, image, datetime, category, location } = req.body ;
        if (!name || !description || !datetime || !location) {
            return res.status(400).json({status:"error", message: "Please fill all the required fields"});
        }
        let imageUrl = null;
        if (req.file) {
            const uploadResult = await cloudinary.uploader.upload(req.file.path);
            imageUrl = uploadResult.secure_url; 
            logger.info(uploadResult);
        }

        const result = await Event.create({name, description, image:imageUrl, date:datetime,createdBy:req.user.id, category, location }) ;
        return res.status(201).json(result);
    } catch (error) {
        logger.error(error.stack || error)
        return res.status(500).json({status:"error", message: "Unable to create new event" })
    }
}

const myEventsController = async (req, res) => {
    try {
        console.log(req.user);
        const result = await Event.find({createdBy:req.user.id})
        console.log(result)
        return res.status(200).json(result);
    } catch (error) {
        logger.error("Error hai ");
        logger.error(error.stack || error)
        return res.status(500).json({status:"error", message: "Unable to fetch your event" })
    }
}


module.exports = {
    getAllEventsController,
    getEventBySlug,
    createEventController,
    myEventsController
}