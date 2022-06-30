const { Router } = require('express');
const { Employe } = require('/models');

const router = Router();

router.get('/', async (req, res) => {
  const employees = await Employe.findAll();
  res.status(200).json(employees);
});

router.get('/:id', async (req, res) => {
  const employees = await Employe.findByPk(req.params.id);
  res.status(200).json(employees);
});

router.post('/', async (req, res) => {
  const { employeeName, email, office, city, district, road, residentialNumber, cell, admissionDate } = req.body;
  const newEmploye = Employe.create({ employeeName, email, office, city, district, road, residentialNumber, cell, admissionDate});

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Employe.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { employeeName, email, office, city, district, road, residentialNumber, cell, admissionDate } = req.body;

  await Employe.update(
    { employeeName, email, office, city, district, road, residentialNumber, cell, admissionDate },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;