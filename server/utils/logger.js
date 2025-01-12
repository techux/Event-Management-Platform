const winston = require("winston");
require("dotenv").config();

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

if (process.env.NODE_ENV == "dev") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
          return `${new Date(
            timestamp
          ).toLocaleString()} [${level.toUpperCase()}] ${message}`;
        })
      ),
    })
  );
}

module.exports = logger ;