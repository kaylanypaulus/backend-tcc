const { Router } = require('express');
const { Provider } = require('/models');

const router = Router();

router.get('/', async (req, res) => {
  const providers = await Provider.findAll();
  res.status(200).json(providers);
});

router.get('/:id', async (req, res) => {
  const providers = await Provider.findByPk(req.params.id);
  res.status(200).json(providers);
});

router.post('/', async (req, res) => {
  const { supplierName, email, cnpj, city, district, road, commercialNumber, tel } = req.body;
  const newProvider = Provider.create({ supplierName, email, cnpj, city, district, road, commercialNumber, tel});

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Provider.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { supplierName, email, cnpj, city, district, road, commercialNumber, tel } = req.body;

  await Provider.update(
    { supplierName, email, cnpj, city, district, road, commercialNumber, tel },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;