const repository = require('../repositories/productionLine-repository');

// List
exports.listProductionLines = async (req, res) => {
    try {
        const data = await repository.listProductionLines();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({ message: 'Falha ao carregar as Linhas de Produção'});
    }
}

// Create
exports.createProductionLine = async (req, res) => {
    try {
        await repository.createProductionLine({
            name: req.body.name
        });
        res.status(201).send({ message: 'Linha de Produção cadastrada com sucesso!'});
    } catch(e) {
        res.status(500).send({ message: 'Falha ao cadastrar a linha de produção' });
    }
}

// Update
exports.updateProductionLine = async (req, res) => {
    try {
        await repository.updateProductionLine(req.params.id, req.body);
        res.status(200).send({ message: 'Linha de produção atualizada com sucesso'});
    } catch(e) {
        res.status(500).send({ message: 'Falha ao atualizar a linha de produção' });
    }
}

// Delete
exports.removeProductionLine = async (req, res) => {
    try {
        await repository.removeProductionLine(req.params.id);
        res.status(200).send({ message: 'Linha de produção removida' });
    } catch(e) {
        res.status(500).send({ message: 'Falha ao remover a linha de produção'});
    }
}