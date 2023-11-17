import React, { useState } from 'react'
import Logo from '../Images/Logo.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signin() {

    const Navigate = useNavigate();

    const [data, setData] = useState(
        {
          email: "",
          password: ""
        })

    const inputHandler = (event) => {
            const { name, value } = event.target
            setData(
              (previousState) => ({
                ...previousState,
                [name]: value
              })
            )
          }

    const validate = async () => {
   
            var Data = await axios.post(`/api/signin`, data)
              .then(
                (res) => {
                  if (res.data.status == "success") {
                    
                    let token = res.data.token
                    let userId = res.data.data._id
                    let name = res.data.data.name
        
                    sessionStorage.setItem("token", token)
                    sessionStorage.setItem("userId", userId)
                    sessionStorage.setItem("name", name)
        
                    Navigate("/home")
                  }
                   else {
                    alert("invalid credentials")
                  }
                }
              )
              .catch((err) => {
                console.log(err)
              })
          }      

  return (
    <div className="container">
    <div className="row sign-in-form justify-content-center">
    <div className="col col-6 col-sm-6 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
      
    <div className="row g-2">
    
    
    <div  className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center mt-3">
        <img className='flex' width={"20%"} height={"40%"} src={Logo} alt='logo' />
   </div>


    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
        <h1 className='mb-5'>Sign in to X</h1>
        
        <button className='btn btn-outline-dark btn-rounded mb-3' style={{width:"100%"}}>Sign up with google</button>
        <br />
        <button type='button' className='btn btn-outline-dark mb-2' style={{width:"100%"}}>Sign up with Apple</button>

        <h6>or</h6>
    </div>

          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <input type="email" className="form-control"
                  required={true}
                  name='email'
                  placeholder='Enter your email address'
                  value={data.email}
                  onChange={inputHandler} />
          </div>

         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <input type="password" id="" className="form-control"
                  required={true}
                  placeholder='Enter your password'
                  value={data.password}
                  name='password'
                  onChange={inputHandler}
                />
          </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
                <button onClick={validate} className="btn bg-dark bg-opacity-75 text-light" style={{ width: '100%' }}>Login</button>
              </div>
        <div className='mt-5'>
        <p>Don't have an account? <a href="/signup">Signup</a></p>
        
        </div> 
        
    </div>
</div>
</div>
</div>
)
}
  


export default Signin