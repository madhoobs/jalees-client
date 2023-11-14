import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import TabBar from './components/TabBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Caregiver from './pages/Caregiver.jsx'
import Profile from './pages/Profile.jsx'
import { CheckSession } from './services/Auth'
import './App.css'
import NewSessionForm from './pages/NewSessionForm.jsx'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <NavBar user={user} handleLogOut={handleLogOut} />
      <TabBar user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/account" element={<Profile user={user} />} />
          <Route path="/caregiver" element={<Caregiver />} />
          <Route path="/session/new" element={<NewSessionForm user={user} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
