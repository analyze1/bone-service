const express = require('express');
const router = express.Router();
const path = require('path');
const brandRoutes = require('./brand'); // Import the brand routes
const smsRoutes = require('./sms'); // Import the SMS routes
const subModelRoutes = require('./submodel'); // Import the submodel routes
const bitlyRoutes = require('./bitly'); // Import the bitly routes
const { swaggerUi, swaggerSpec } = require('./../swagger');

const { login, register } = require('../app/controllers/authController');
const verifyJWT = require('../app/middleware/authMiddleware');

router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

router.use('/api/sms', smsRoutes);
router.use('/api/bitly', bitlyRoutes);
router.use(verifyJWT);
router.use('/api/brands', brandRoutes);
router.use('/api/submodels', subModelRoutes);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '404.html'));
});
module.exports = router;