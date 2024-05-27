// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const { mongoURI } = require('./config');

// Conectar ao MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.log('Erro ao conectar ao MongoDB:', err));

app.use(express.json());

// Configurar as rotas
const userRoutes = require('./routes/userRoutes');
const musicRoutes = require('./routes/musicRoutes');
app.use('/api/users', userRoutes);
app.use('/api/musics', musicRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
