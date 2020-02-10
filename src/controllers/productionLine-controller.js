const mongoose = require('mongoose');
const ProductionLine = mongoose.model('ProductionLine');

// List
exports.listProductionLines = async (req, res) => {
    try {
        const data = await ProductionLine.find({});
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({ message: 'Falha ao carregar as Linhas de Produção'});
    }
}

// Create
exports.createProductionLine = async (req, res) => {
    try {
        const productionLine = new ProductionLine({
            name: req.body.name
        });
        
        await productionLine.save();

        res.status(201).send({ message: 'Linha de Produção cadastrada com sucesso!'});
    } catch(e) {
        res.status(500).send({ message: 'Falha ao cadastrar a linha de produção' });
    }
}