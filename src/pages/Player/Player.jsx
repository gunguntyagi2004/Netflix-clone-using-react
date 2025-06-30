import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id, type } = useParams(); // 🟢 Grab both id and type
  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZThjNzQzN2YyNmY2YmRiNjhiM2E1NTJiY2JiY2EyYyIsIm5iZiI6MTc1MTEyNjQ5Ni42MTc5OTk4LCJzdWIiOiI2ODYwMTFlMGVhMDFhMTliOTUwZDhlZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.E9G7_PmJmLbJkQC7gYlyX8MR2KllCl5y79SiVLF9DK8'
    }
  };

 useEffect(() => {
  fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => {
     const trailer = res.results.find(
  (video) => video.site === 'YouTube'
);

      if (trailer) {
        setapiData(trailer);
      } else {
        alert('🚫 No YouTube trailer found for this title.');
      }
    })
    .catch(err => {
      console.error('Error fetching trailer:', err);
      alert('Something went wrong.');
    });
}, [id, type]);

  return (
    <div className='Player'>
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)} />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        width='90%'
        height='90%'
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
