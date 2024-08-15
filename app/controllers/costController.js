const { dbCenterDB } = require('../models');
const Cost = dbCenterDB.Cost;

const getCostsBySubModelId = async (req, res) => {
    // console.log(`${req.params.sub_model_id}`);

    const { sub_model_id } = req.params;
    try {
        const costs = await Cost.findAll({ where: { mo: sub_model_id } });
        res.json(costs);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching costs');
    }
}
module.exports = {
    getCostsBySubModelId
}