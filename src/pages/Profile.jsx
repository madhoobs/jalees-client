import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ViewProfile } from '../services/Auth'

const Profile = ({ user }) => {
  let navigate = useNavigate()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const handleProfile = async () => {
      const data = await ViewProfile(user.username)
      setProfile(data)
    }
    handleProfile()
  }, [profile])

  return profile ? <div>{profile.username}</div> : null
}

export default Profile
