import { useState } from 'react'
import UserContextProvider from './UserContext.js/UserContextProvider'
import Login from './UserContext.js/Login'
import Profile from './UserContext.js/Profile'
import './App.css'

function App() {

  return (
    <>
      <UserContextProvider>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>
    
      
    </>
  )
}

export default App
