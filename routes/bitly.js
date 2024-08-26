const express = require('express');
const router = express.Router();
const bitlyController = require('../app/controllers/bitlyController');

require('../swagger/bitly/bitly');

router.post('/shorten-url', bitlyController.shortenUrl);
router.post('/shorten-url-multiple', bitlyController.shortenUrlMultiple);

module.exports = router;