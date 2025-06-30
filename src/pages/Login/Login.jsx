import React ,{useState}from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import {login ,signUp} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {
const [signState,setsignState]=useState('Sign In');
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [loading ,setLoading]=useState(false);


const user_auth = async(event)=>{
  event.preventDefault();
  setLoading(true);
  if(signState==='Sign In'){
    await login(email,password);
  }else{
    await signUp(name,email,password,)
  }
  setLoading(false);
}





  return(

    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='Login'>
      <img src={Logo} alt="" className='Login-logo' />
       <div className="login-form">
        <h1>{signState}</h1>
        <form >

        {signState ==='Sign Up'?<input type="text" placeholder='Your name' value={name} onChange={(e)=>{
           setName( e.target.value)}}  />:<></>}

        
        <input type="email" placeholder='Your email'  value={email} onChange={(e)=>{
          setEmail(e.target.value) }}  />
        <input type="password" placeholder='enter your password'  value={password} onChange={(e)=>{
           setPassword(e.target.value)}} />
        <button onClick={user_auth} type='submit'>{signState}</button>
         <div className="form-help">
          <div className="remember">
          <input type="checkbox" />
          <label htmlFor="">Remember me </label>
          </div>
          <p>Need help?</p>
         </div>
        </form>
        <div className="form-switch">

          {signState==='Sign In'? <p>New to Netflix? <span onClick={()=>{setsignState('Sign Up')}}>Sign Up now</span></p>
          : <p>Already have account? <span onClick={()=>{
            setsignState('Sign In')
          }}>Sign In now</span></p>}
         
            
        </div>
       </div>
    </div>
  )
}

export default Login
