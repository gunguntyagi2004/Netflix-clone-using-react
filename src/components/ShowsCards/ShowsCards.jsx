


// src/components/ShowsCards/ShowsCards.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './showsCards.css';
import { useNavigate } from 'react-router-dom'; 

const ShowsCards = ({ title, fetchUrl }) => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setShows(res.data.results);
      } catch (err) {
        console.error("Failed to fetch shows:", err);
      }
    };
    fetchShows();
  }, [fetchUrl]);

  return (
    <div className="showcards-container">
      <h2 className="showcards-title">{title}</h2>
      <div className="showcards-grid">
        {shows.map((show) => (
          <div className="showcard" key={show.id}
           onClick={() => navigate(`/player/tv/${show.id}`)} // ✅ this opens the Player page
            style={{ cursor: 'pointer' }}
          
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="showcard-poster"
            />
            <div className="showcard-info">
              <h3>{show.name}</h3>
              <p>⭐ {show.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsCards;
