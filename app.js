const express = require('express');

const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users', users);
app.use('/cards', cards);

app.use((req, res) => {
  res.status(404).json({ message: 'A solicitação não foi encontrada' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});