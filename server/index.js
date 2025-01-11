const express = require('express');
const winston = require('winston');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});

if (process.env.NODE_ENV == 'dev') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `${new Date(timestamp).toLocaleString()} [${level.toUpperCase()}] ${message}`;
        })
        ),
    }));
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/ping", (req,res)=>{
    res.send("OK") ;
})

app.listen(PORT, "0.0.0.0", ()=>{
    logger.info(`Server started on port : ${PORT}`);
})