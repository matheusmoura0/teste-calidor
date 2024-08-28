const characters = require('../characters.json');

let randomCharacter = null;

exports.getAllCharacters = (req, res) => {
    res.json(characters);
};

exports.selectRandomCharacter = (req, res) => {
    randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    res.json({ message: "Character selected", id: randomCharacter.id });
};

exports.checkCharacter = (req, res) => {
    if (!randomCharacter) {
        return res.status(400).json({ error: "No character selected. Call /select-random first." });
    }

    const { name } = req.body;
    if (randomCharacter.name.toLowerCase() === name.toLowerCase()) {
        res.json({ correct: true, character: randomCharacter });
        randomCharacter = null;
    } else {
        res.json({ correct: false });
    }
};
