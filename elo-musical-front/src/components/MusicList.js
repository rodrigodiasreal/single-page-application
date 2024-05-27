// src/components/MusicList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MusicList() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/musics');
        setMusics(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMusics();
  }, []);

  return (
    <div>
      <h2>Lista de Músicas</h2>
      <ul>
        {musics.map(music => (
          <li key={music._id}>{music.title} por {music.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default MusicList;
