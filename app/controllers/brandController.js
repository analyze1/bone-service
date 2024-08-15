const { dbCenterDB } = require('../models');
const Brand = dbCenterDB.Brand;

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.findAll({ limit: 10 });
        res.json(brands);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching brands');
    }
}
const getBrandById = async (req, res) => {
    const { id } = req.params;
    try {
        const brand = await Brand.findByPk(id);
        if (!brand) {
            return res.status(404).send('Brand not found');
        }
        res.json(brand);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching brand');
    }
}
const getBrandByName = async (req, res) => {
    const { name } = req.params;
    try {
        const brand = await Brand.findOne({ where: { name } });
        if (!brand) {
            return res.status(404).send('Brand not found');
        }
        res.json(brand);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching brand');
    }
};
module.exports = {
    getAllBrands,
    getBrandById,
    getBrandByName
};