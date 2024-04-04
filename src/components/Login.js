import React, { useState } from 'react'
import './Login.css'
import SignUp from './SignUp';

function Login() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>
      <div className="login__background">
        <img className='login__logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="login logo" />
        <button className='login__button' onClick={() => setSignIn(true)}>Sign In</button>

        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="login__input">
              <form action="">
                <input type="email" placeholder='Email Address' />
                <button onClick={() => setSignIn(true)} className='login__getStarted'>GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login