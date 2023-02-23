import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Users.css'

function SignUp() {
    const serverUrl = process.env.REACT_APP_SERVER_URL
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [username, setUsername]=useState('')
    const [success, setSuccess]=useState(false)

    const handleSignIn = (e) => {
        e.preventDefault()



        axios.post(`${serverUrl}/users/signup` ,{email,password,username})
        .then(res=>{
            if(res.data.status===409){
                alert("There is another user with this eamil. Try another one")
            }else{
                setEmail('')
                setPassword('')
                setUsername('')
                setSuccess(true)
            }

        })
        .catch(err => console.log(err));



    }



  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSignIn}>
            <div className='title-container'>
                <h1> Sign Up </h1>
                <p> Please fill in this form to sign up. </p>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='email'>Email</label>
                <input  value={email} onChange={(e)=>setEmail(e.target.value)} type='email' name='email' placeholder='Enter email' />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='psw'>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' name='pws' placeholder='Enter password' />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='username'> Username </label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type='username' name='username' placeholder='Enter username' />
            </div>

            <div className='button-container'>
                <button type='reset' className='cancelbtn'> Cancel </button>
                <button type='submit' className='signupbtn'> Sign Up </button>
            </div>


            {
        success
        ?
        <p> You are signed up successfully! <Link to='/SignIn'> Sign in  </Link> </p>
        :
        <p className='signin-message'> Already have an account? <Link to='/SignIn'> Sign in  </Link></p>
    }
        </form>
      
    </div>
  )
}

export default SignUp
