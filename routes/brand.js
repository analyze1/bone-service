const express = require('express');
const router = express.Router();
const brandController = require('../app/controllers/brandController');
const costController = require('../app/controllers/costController');

// Define brand routes
// Import Swagger documentation
require('../swagger/brand/brands');
require('../swagger/brand/brandById');
require('../swagger/brand/brandByName');
require('../swagger/costs/costs');
router.get('/', brandController.getAllBrands);
router.get('/:id', brandController.getBrandById);
router.get('/:sub_model_id/costs', costController.getCostsBySubModelId);
router.get('/name/:name', brandController.getBrandByName);

router.post('/', (req, res) => {
    const newBrand = req.body;
    res.send('New brand added');
});

router.put('/:id', (req, res) => {
    const brandId = req.params.id;
    const updatedBrand = req.body;
    res.send(`Brand with ID: ${brandId} updated`);
});

router.delete('/:id', (req, res) => {
    const brandId = req.params.id;
    res.send(`Brand with ID: ${brandId} deleted`);
});

module.exports = router;