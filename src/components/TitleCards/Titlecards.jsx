import React,{useRef,useEffect,useState} from 'react'
import './Titlecards.css'
import Cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'




const Titlecards = ({title,category}) => {
  const [apiData,setapiData]=useState([])

const cardRef=useRef();

const options = {
 method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZThjNzQzN2YyNmY2YmRiNjhiM2E1NTJiY2JiY2EyYyIsIm5iZiI6MTc1MTEyNjQ5Ni42MTc5OTk4LCJzdWIiOiI2ODYwMTFlMGVhMDFhMTliOTUwZDhlZGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.E9G7_PmJmLbJkQC7gYlyX8MR2KllCl5y79SiVLF9DK8'
  }
};







const handleWheel=(event)=>{
  event.preventDefault();
  cardRef.current.scrollLeft += event.deltaY;
}



useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));

  cardRef.current.addEventListener('wheel',handleWheel)
},[]);


  return (
    <div className='Titlecards'>
      <h2>{title ?title:'Popular on Netflix'}</h2>
      <div className="card-list"  ref={cardRef}>
        {apiData.map((cards,index)=>{
          return <Link to={`/player/movie/${cards.id}`} className="cards" key={index}>

            <img src={`https://image.tmdb.org/t/p/w500`+cards.backdrop_path} alt="" />
            <p>{cards.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards
