const User = require("../models/user.model");

const profileController = async (req, res) =>{
    try {
        const result = await User.findById(req.user.userId).select("-password");
        res.status(200).json(result);
    } catch (error) {
        console.log("error in profile viewing : "+ error.stack || error.message)
        res.status(500).json({status:"error", message: "Internal Server Error"})
    }
}

module.exports = {
    profileController
}