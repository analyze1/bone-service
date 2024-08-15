const express = require('express');
const router = express.Router();
const path = require('path');
const brandRoutes = require('./brand'); // Import the brand routes
const smsRoutes = require('./sms'); // Import the SMS routes
const subModelRoutes = require('./submodel'); // Import the submodel routes
const bitlyRoutes = require('./bitly'); // Import the bitly routes
const { swaggerUi, swaggerSpec } = require('./../swagger');

router.use('/api/brands', brandRoutes);
router.use('/api/sms', smsRoutes);
router.use('/api/submodels', subModelRoutes);
router.use('/api/bitly', bitlyRoutes);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '404.html'));
});
module.exports = router;