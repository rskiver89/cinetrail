import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Users.css'

function SignIn() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [username, setUsername]=useState('')

    const handleSignIn = () => {

    }



  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSignIn}>
            <div className='title-container'>
                <h1> Sign In </h1>
                <p> Please fill in this form to sign in. </p>
            </div>
            <div className='input-wrapper'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Enter email' />
            </div>
            <div className='input-wrapper'>
                <label htmlFor='psw'>Password</label>
                <input type='password' name='pws' placeholder='Enter password' />
            </div>

            <div className='button-container'>
                <button type='reset' className='cancelbtn'> Cancel </button>
                <button type='submit' className='signinbtn'> Sign in </button>
            </div>

            <p className='signin-message'> Don't have an account? <Link to='/SignUp'> Sign Up  </Link></p>
        </form>
      
    </div>
  )
}

export default SignIn
