import React from 'react';
import './ottmp.css';
const Signin = () => {
  return (
    <div>
        <div className='container1'>
        <form className='signinForm' action=""> 
            <input id='email' type="email" placeholder='email Id' /> <br /> <br />
            <input id='pswd' type="password" placeholder='password' />
         </form>
        </div>

    </div>
    
      );
  
}

export default Signin