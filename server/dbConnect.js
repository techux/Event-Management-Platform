const mongoose = require('mongoose');
const logger = require('./utils/logger');

const mongouri = process.env.MONGO_STRING ;

const dbConnect = async function() {
    try {
        await mongoose.connect(mongouri)
        .then(logger.info(`Conected to MongoDB Successfully => ${mongouri}`));
        
    } catch (error) {
        logger.error("[ERROR] Unable to connect to Database : "+ error.message );
    }
}

module.exports = dbConnect ;