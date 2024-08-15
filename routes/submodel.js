const express = require('express');
const router = express.Router();
const subBrandController = require('../app/controllers/subBrandController');

require('../swagger/submodel/submodelById');
require('../swagger/submodel/submodelByBrandId');

router.get('/:id', subBrandController.getSubmodelById);
router.get('/brand/:model_id', subBrandController.getAllSubmodelsByBrandId);

module.exports = router;