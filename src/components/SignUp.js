import React, { useRef } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css'

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
    )
    .then((authUser) => {
        console.log(authUser.user)
    })
    .catch((error) => {
        alert(error.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
    )
    .then((authUser) => {
        console.log(authUser.user)
    })
    .catch((error) => alert(error.message));
  }

  return (
    <div className='signUp'>
        <form onSubmit={signIn}>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button type='submit'>Sign In</button>
            <h4><span className='signUp__grey'>New to Netflix?</span> <span className='signUp__link' onClick={register}>Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignUp