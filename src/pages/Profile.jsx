import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ViewProfile, CheckSession } from '../services/Auth'
import {
  Container,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import HistoryIcon from '@mui/icons-material/History'
import LogoutIcon from '@mui/icons-material/Logout'

const Profile = () => {
  let navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    // Check user session
    const token = localStorage.getItem('token')

    const checkToken = async () => {
      const user = await CheckSession()
      setUser(user)
      handleProfile()
    }

    if (!token) {
      navigate('/login')
    } else {
      checkToken()
    }

    const handleProfile = async () => {
      const data = await ViewProfile(user.username)
      setProfile(data)
    }
  }, [user])

  return profile ? (
    <Container sx={{ padding: '30px', paddingBottom: '40px' }}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <Typography variant="h6" gutterBottom>
        <b>Username:</b> {profile.username}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <b>Email:</b> {profile.email}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <b>First Name:</b> {profile.firstName}
      </Typography>
      <Typography variant="h6" gutterBottom>
        <b>Last Name:</b> {profile.lastName}
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton href="/account/sessions">
                <ListItemIcon>
                  <ChildCareIcon />
                </ListItemIcon>
                <ListItemText primary="Sessions History" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton href="/account/dependants">
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Dependents" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton key="logout" onClick={handleLogOut}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Container>
  ) : null
}

export default Profile
