const express = require('express');
const charactersRoute = require('./routes/characters');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/characters', charactersRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
