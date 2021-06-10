import React from 'react';
import './App.css';
import {auth, provider} from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from './features/userSlice';


function App() {

  const dispatch = useDispatch()

  const userName = useSelector(selectUserName)

  const userEmail = useSelector(selectUserEmail)

  const handleSignIn = () =>{
    auth.signInWithPopup(provider).then((res)=>{
      dispatch(setActiveUser({
        name: res.user.displayName,
        userEmail: res.user.email
      }))
    }).catch((err) => alert(err.message))
  }

  const handleSignOut = () =>{
    auth.signOut().then(()=>{
      dispatch(setUserLogOutState()).catch((err) => alert(err.message))
    })
  }

  return (
    <div className="App">
      { userName ? (
        <button onClick={handleSignOut}> Sign Out </button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )
      }
    </div>
  );
}

export default App;
