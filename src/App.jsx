import React, { useState } from 'react'
import Home from './views/Home';
import TodoPage from './views/TodoPage';
import SignInPage from './views/SignInPage';
import SignUpPage from './views/SignUpPage';
import ResponsiveAppBar from './components/Appbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [user,setUser] = useState({})

  const logMeIn = (user) => {
    setUser(user)
  }
  const logMeOut = () => {
    setUser({})
  }

  return (
    <div>
    <ResponsiveAppBar user={user} />
    <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/todo' element={<TodoPage user={user}/>}/>
        <Route path='/signup' element={<SignUpPage user={user}/>}/>
        <Route path='/signin' element={<SignInPage logMeIn={logMeIn} user={user}/>}/>
    </Routes>
    </div>
  )
}

