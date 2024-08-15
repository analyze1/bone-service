// middleware/loggerMiddleware.js
const { error } = require('winston');
const logger = require('../../logger');

const requestLogger = (req, res, next) => {
    const { method, url, ip } = req;
    const message = `Method: ${method}, URL: ${url}, IP: ${ip}`;

    logger.info(message); // Log the request activity

    next(); // Call the next middleware in the stack
};

module.exports = requestLogger;