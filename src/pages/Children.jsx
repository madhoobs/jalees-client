import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import { GetChildren } from '../services/Child'

const Children = ({ user }) => {
  let navigate = useNavigate()
  const [children, setChildren] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    const handleChildren = async () => {
      const data = await GetChildren()
      setChildren(data)
    }
    handleChildren()
  }, [children])

  return children ? (
    <div>
      {children.username}
      <Link to={'/account/sessions'}>Sessions History</Link>
      <Link key="logout" onClick={handleLogOut}>
        Logout
      </Link>
    </div>
  ) : null
}

export default Children
