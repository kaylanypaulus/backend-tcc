const { Router } = require('express');
const { Request } = require('/models');

const router = Router();

router.get('/', async (req, res) => {
  const requests = await Request.findAll();
  res.status(200).json(requests);
});

router.get('/:id', async (req, res) => {
  const requests = await Request.findByPk(req.params.id);
  res.status(200).json(requests);
});

router.post('/', async (req, res) => {
  const { orderDate, employeeName, customerName, productName, amount, status} = req.body;
  const newRequest = Request.create({ orderDate, employeeName, customerName, productName, amount, status});

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Request.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { orderDate, employeeName, customerName, productName, amount, status } = req.body;

  await Request.update(
    { orderDate, employeeName, customerName, productName, amount, status },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;