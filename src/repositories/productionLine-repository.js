const mongoose = require('mongoose');
const ProductionLine = mongoose.model('ProductionLine');

exports.listProductionLines = async () => {
    const res = await ProductionLine.find({});
    return res;
}

exports.createProductionLine = async data => {
    const productionLine = new ProductionLine(data);
    await productionLine.save();
}