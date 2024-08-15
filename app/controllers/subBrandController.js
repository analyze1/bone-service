const { dbCenterDB } = require('../models');
const SubBrand = dbCenterDB.SubBrand;

const getSubmodelById = async (req, res) => {
    const { id } = req.params;
    try {
        const submodel = await SubBrand.findByPk(id);
        if (!submodel) {
            return res.status(404).send('Submodel not found');
        }
        res.json(submodel);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching submodel');
    }
}
const getAllSubmodelsByBrandId = async (req, res) => {
    const { model_id } = req.params;
    try {
        const costs = await SubBrand.findAll({ where: { br_id: model_id } });
        res.json(costs);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching costs');
    }
}

module.exports = {
    getSubmodelById,
    getAllSubmodelsByBrandId,
}
