import { useState,useEffect } from 'react'
import Home from './pages/Home/Home'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
 import { ToastContainer, toast } from 'react-toastify';
import TVshows from './pages/TVshows/TVshows'




function App() {

  const navigate =useNavigate();

  useEffect(()=>{
     onAuthStateChanged(auth, async()=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/login')
      }
     })
  },[])


  const [count, setCount] = useState(0)

  return (
   <div>
      <ToastContainer theme='dark' />
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path ='/login' element={<Login/>}/>
      <Route path ='/player/:id' element={<Player/>}/>
      <Route path ='/Tvshows' element={<TVshows/>}/>
      <Route path="/player/:type/:id" element={<Player />} />
     </Routes>

   
   </div>
  )
}

export default App
