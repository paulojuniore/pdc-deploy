const PaisOrigem = require('../models/Pais');

module.exports = {
  async store(req, res) {
    const {
      descricao
    } = req.body;

    const origin_country = await PaisOrigem.create({ descricao });

    return res.json(origin_country);
  }
}