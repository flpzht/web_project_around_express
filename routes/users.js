const fs = require('fs');
const path = require('path');

const usersRouter = require('express').Router();

const usersFilePath = path.join(__dirname, '../data/users.json');

usersRouter.get('/', (req, res) => {
  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading users data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

usersRouter.get('/:id', (req, res) => {
  const userId = req.params.id;

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading users data:', err);
      res.status(500).json({ error: 'Ocorreu um erro no servidor' });
      return;
    }
    const users = JSON.parse(data);
    const user = users.find(u => u._id === userId);

    if (!user) {
      res.status(404).json({ message: 'ID do usuário não encontrado' });
      return;
    }

    res.json(user);
  });
});

module.exports = usersRouter;