const fs = require('fs');
const path = require('path');

const cardsRouter = require('express').Router();

const cardsFilePath = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/', (req, res) => {
  fs.readFile(cardsFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading cards data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const cards = JSON.parse(data);
    res.json(cards);
  });
});

module.exports = cardsRouter;