import React from 'react'
import './Home.css'
import Navbar from '../../components/NavBar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/TitleCards/Titlecards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hero">
       <img src={hero_banner} alt="" className='banner_img' />
       <div className="hero_caption">
        <img src={hero_title} alt="" className='caption_img' />
        <p>Discovering  his tie to  a secret ancient  order,a young living in 
        morden  Istanbul embarks on a quest  to save the city from a immortal enemy.
        </p>
        <div className="hero_btns">
        <button className='btn'><img src={play_icon} alt="" height='20px' />Play
        </button>
        <button className='btn dark-btn'><img src={info_icon} alt="" height='20px' />More Info
        </button>
        </div>
        <Titlecards  className="title-cards"/>
       </div>
      </div>
          <div className="more-cards">
 <Titlecards   title='Blockbuster Movies'   category={'top_rated'}/>
  <Titlecards     title={'Only on Netflix'}   category={'popular'}/>
   <Titlecards    title={"Upcoming"}     category={'upcoming'}/>
    <Titlecards  title={"Top picks for u"}    category={'now_playing'} />
     </div>
       <Footer/>
    </div>
  )
}

export default Home
