const { createLogger, format, transports } = require('winston');
const { combine, label, printf } = format;
const moment = require('moment-timezone');

// Define the log format with custom timestamp
const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

// Create the logger
const logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'app' }),
        format.timestamp({
            format: () => moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss') // Set timezone to Asia/Bangkok
        }),
        logFormat
    ),
    transports: [
        new transports.File({ filename: 'logs/request.log' }),
        new transports.Console()
    ]
});

module.exports = logger;