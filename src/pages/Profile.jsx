import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ViewProfile } from '../services/Auth'
import { Typography } from '@mui/material'

const Profile = ({ user }) => {
  let navigate = useNavigate()
  const [profile, setProfile] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    const handleProfile = async () => {
      const data = await ViewProfile(user.username)
      setProfile(data)
    }
    handleProfile()
  }, [profile])

  return profile ? (
    <div>
      {profile.username}
      <Link to={'/account/sessions'}>Sessions History</Link>
      <Link key="logout" onClick={handleLogOut}>
        Logout
      </Link>
    </div>
  ) : null
}

export default Profile
