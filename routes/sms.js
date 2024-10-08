const express = require('express');
const router = express.Router();
const sendSmsController = require('../app/controllers/sendSMSController');
const { readJsonFile } = require('../app/controllers/readJsonFileController');

require('./../swagger/sms/send');
router.get('/list', async (req, res) => {
    try {
        const service = await readJsonFile('sms.json');
        res.json(service)
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ error: 'Failed to send SMS' });
    }
});

router.post('/send', sendSmsController.sms);
router.post('/multiple-send', sendSmsController.multipleSendSms)

module.exports = router;