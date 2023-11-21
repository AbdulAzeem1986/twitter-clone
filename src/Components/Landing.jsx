import React, { useState } from 'react'
import Logo from '../Images/Logo.jpg'
import { useNavigate } from 'react-router-dom'
import "./Landing.css"


function Landing() {
  // const [showSignIn, setShowSignIn] = useState(false);
  let Navigate = useNavigate();

  const sign = () => {
    Navigate("/signin")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 logo mt-5">
          <img style={{ width: "60%"}} src={Logo} alt='logo' />
        </div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-5">
          <h1 className='mb-5'>Happening now</h1>
          <h3 className='mb-4'>Join today</h3>

          <div>
            <button className='btn btn-outline-dark btn-rounded mb-3 button'>Sign up with google</button>
            <br />
            <button className='btn btn-outline-dark mb-2 flex button'>Sign up with Apple</button>

            <h6>or</h6>
            <button className='btn btn-primary button'>Create account</button>
            <p className='clause'>By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>

            <p>Already have an account?</p>
            <button onClick={sign} className='btn signin-button text-primary button'>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing