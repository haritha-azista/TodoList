import React from 'react';
import './ottmp.css';
import { useNavigate} from 'react-router-dom';

const OttMainPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='container'>
        <img id='mainBackground' src="/OTTplatform.png" alt="ottbackground"  />
        <h1 id='ottName'>OTT NAME</h1>
        <button id='signIn-button' onClick={()=>navigate("/signin")}> Sign In</button>
        </div>
    </div>
  )
}

export default OttMainPage