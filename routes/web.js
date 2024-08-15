const express = require('express');
const router = express.Router();
const path = require('path');
const { readJsonFile } = require('../app/controllers/readJsonFileController');
const logger = require('../logger');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});
router.get('/list-services', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'list.html'));
});
router.get('/send-sms', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'sms.html'));
});

module.exports = router;