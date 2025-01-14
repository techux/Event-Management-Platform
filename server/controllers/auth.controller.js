const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require("../utils/logger");
const {customAlphabet} = require("nanoid")
const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

const loginController = async (req, res)=>{
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({status:"error", message: 'Email and password are required.'});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({status:"error", message: 'Invalid email or password.'});
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({status:"error", message: 'Invalid email or password.'});
        }
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        )
        return res.status(200).json({status:"ok",token})
    } catch (error) {
        logger.error(`In loginController: ${error.stack || error}`);
        return res.status(500).json({status:"error", message: 'Unable to login , please try again later'});
    }
}


const registerController = async (req, res)=> {
    try {
        const {name, username, email, password} = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({status:"error", message: 'Name, username, email and password are required'});
        }
        const userExist = await User.findOne({$or: [{email}, {username}]}) ;
        if (userExist){
            if (userExist.email === email){
                return res.status(400).json({status:"error", message:"Email already exists"});
            }
            if (userExist.username === username){
                return res.status(400).json({status:"error", message:"Username not available"});
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10) ;
        await User.create({name, username, email, password:hashedPassword, role:'regular'})
        return res.status(201).json({status:"ok",message:"User created successfully"})
    } catch (error) {
        logger.error(`In registerController: ${error.stack || error}`);
        return res.status(500).json({status:"error", message: 'Unable to register user, please try again later'});
    }
}


const guestRegisterController = async (req, res)=>{
    try {
        let guestName = `Guest_${customAlphabet(alphabet, 8)()}`;
        logger.info(guestName);
        let username = guestName.toLowerCase();
        let guestExist = await User.findOne({username}) ;
        while(guestExist){
            guestName = `Guest_${customAlphabet(alphabet, 8)()}`;
            username = guestName.toLowerCase();
            guestExist = await User.findOne({username});
        }
        const email = `${username}_${customAlphabet(alphabet, 4)()}@guest.mail`;
        const result = await User.create({name:guestName, username, email, password:"0", role:'guest'});
        const token = jwt.sign(
            { userId: result._id , role: "guest"},
            process.env.JWT_SECRET_KEY,
            { expiresIn: '2h' }
        ) ;
        return res.status(201).json({status:"ok",message:"Logged in as successfully", token});
    } catch (error) {
        logger.error(`In guestRegisterController: ${error.stack || error}`);
        return res.status(500).json({status:"error", message: 'Something went wrong in Guest mode, please retry', token:null});
    }
}

module.exports = {
    registerController,
    guestRegisterController,
    loginController
}