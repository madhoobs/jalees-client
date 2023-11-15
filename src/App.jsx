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
import Session from './pages/Session.jsx'
import AllSessions from './pages/AllSessions.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NewReview from './pages/NewReview.jsx'
import Children from './pages/Children.jsx'
import NewChild from './pages/NewChild.jsx'
import EditChild from './pages/EditChild.jsx'

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/account" element={<Profile user={user} />} />
          <Route
            path="/account/dependants"
            element={<Children user={user} />}
          />
          <Route path="/dependant/add" element={<NewChild user={user} />} />
          <Route path="/dependant/edit" element={<EditChild user={user} />} />
          <Route
            path="/account/sessions"
            element={<AllSessions user={user} />}
          />
          <Route path="/caregiver" element={<Caregiver />} />
          <Route path="/sessions" element={<Session />} />
          <Route path="/session/new" element={<NewSessionForm user={user} />} />
          <Route path="/review/add" element={<NewReview user={user} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
