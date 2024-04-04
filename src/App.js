import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'
import Profile from './components/Profile';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if(userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        dispatch(
          logout({
           uid: userAuth, 
           email: userAuth
          })
        )
      }
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;