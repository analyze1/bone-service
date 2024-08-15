// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const NODE_ENV = process.env.NODE_ENV;
const DOMAIN = process.env.DOMAIN;
const PORT = process.env.PORT;

const URL = NODE_ENV === 'production' ? `https://${DOMAIN}` : `http://${DOMAIN}:${PORT}`;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Open API',
            description: 'API documentation for the Open API',
            version: '1.0.0 Beta',
        },
        host: 'localhost:3000',
    },
    apis: [
        './swagger/brand/*.js',
        './swagger/submodel/*.js',
        './swagger/costs/*.js',
        './swagger/sms/*.js',
        './swagger/bitly/*.js',

    ], // Path to your API routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };