const express = require('express');
const router = express.Router();
const productionLineController = require('../controllers/productionLine-controller');

// Production Line
router.get('/', productionLineController.listProductionLines);
router.post('/', productionLineController.createProductionLine);
router.put('/:id', productionLineController.updateProductionLine);
router.delete('/:id', productionLineController.removeProductionLine);

module.exports = router;