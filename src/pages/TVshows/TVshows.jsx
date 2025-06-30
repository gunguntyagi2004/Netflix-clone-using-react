import React from 'react'
import Squid_Game from '../../assets/Squid_Game.jpg'
import Navbar from '../../components/NavBar/Navbar'
import squid_game_title from '../../assets/squid_game_title.png'
import './TVshows.css'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import ShowsCards from '../../components/ShowsCards/ShowsCards'



const API_KEY = `6e8c7437f26f6bdb68b3a552bcbbca2c`;
const TVshows = () => {
  return (
    <div  className='TVshows'>
        <Navbar/>
      <img src={Squid_Game} className='main-image' alt="" />
         <div className="main_caption">
        <img src={squid_game_title} alt="" className='caption_img' />
        <div className="main-btn">
            <button className='btn'><img src={play_icon} alt="" height='20px' />play now</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" height='20px' />More info</button>
        </div>
        <p>
            Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits—with deadly high stakes. A thrilling survival drama from South Korea that explores human desperation, morality, and greed.
        </p>
    </div>

   
<div style={{ backgroundColor: '#000' }}>
      <ShowsCards
        title="Trending Today"
        fetchUrl={`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`}
      />
      <ShowsCards
        title="Popular TV Shows"
        fetchUrl={`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`}
      />
      <ShowsCards
        title="Top Rated"
        fetchUrl={`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`}
      />
      <ShowsCards
        title="Airing Today"
        fetchUrl={`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US`}
      />
    </div>


    </div>
  )
}

export default TVshows
