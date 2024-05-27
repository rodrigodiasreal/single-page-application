// backend/controllers/musicController.js
const Music = require('../models/Music');

const addMusic = async (req, res) => {
  const { title, artist, genre } = req.body;
  const userId = req.user.userId; // Assumindo que o ID do usuário está disponível no req.user

  try {
    const newMusic = new Music({ title, artist, genre, user: userId });
    await newMusic.save();
    res.status(201).json({ message: 'Música cadastrada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar música' });
  }
};

const getMusics = async (req, res) => {
  try {
    const musics = await Music.find().populate('user', 'username');
    res.status(200).json(musics);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar músicas' });
  }
};

module.exports = { addMusic, getMusics };
