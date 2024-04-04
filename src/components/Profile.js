import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import Navbar from './Navbar'
import PlanScreen from './PlanScreen'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    signOut(
        auth,
    )
    .then(() => {
        navigate('/')
    })
    .catch((error) => alert(error.message));
  }

  return (
    <div className='profileScreen'>
        <Navbar />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <PlanScreen />
                        <button className='profileScreen__signOut' onClick={logOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile