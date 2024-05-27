// backend/routes/musicRoutes.js
const express = require('express');
const { addMusic, getMusics } = require('../controllers/musicController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Middleware de autenticação

router.post('/', authMiddleware, addMusic);
router.get('/', getMusics);

module.exports = router;
