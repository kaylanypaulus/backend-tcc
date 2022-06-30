const { Router } = require('express');
const { Customer } = require('/models');

const router = Router();

router.get('/', async (req, res) => {
  const customers = await Customer.findAll();
  res.status(200).json(customers);
});

router.get('/:id', async (req, res) => {
  const customers = await Customer.findByPk(req.params.id);
  res.status(200).json(customers);
});

router.post('/', async (req, res) => {
  const { customerName, email, cpf, city, district, road, residentialNumber, cell } = req.body;
  const newCustomers = Customer.create({ customerName, email, cpf, city, district, road, residentialNumber, cell });

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Customer.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { customerName, email, cpf, city, district, road, residentialNumber, cell } = req.body;

  await Customer.update(
    { customerName, email, cpf, city, district, road, residentialNumber, cell },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;