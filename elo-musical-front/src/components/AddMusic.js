// src/components/AddMusic.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function AddMusic() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://localhost:5000/api/musics', {
        title,
        artist,
        genre
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Adicionar Música</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Artista</label>
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
        </div>
        <div>
          <label>Gênero</label>
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AddMusic;
