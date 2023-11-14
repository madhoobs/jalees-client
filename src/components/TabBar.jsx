import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import {
  OtherHousesOutlined,
  PersonOutlined,
  RestoreOutlined
} from '@mui/icons-material'
import Paper from '@mui/material/Paper'

const TabBar = ({ user }) => {
  let navigate = useNavigate()
  const [value, setValue] = React.useState('home')
  const ref = React.useRef(null)

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0
  }, [])
  return (
    <Box
      sx={{
        pb: 7,
        display: { xs: 'flex', md: 'none' },
        mr: 1,
        paddingBottom: '100px'
      }}
      ref={ref}
    >
      <CssBaseline />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
            if (newValue === 'profile' && user) {
              // Navigate to profile
              navigate('/account')
            } else if (newValue === 'history' && user) {
              // Navigate to sessions history
              navigate('/account/sessions')
            } else if (
              // Navigate to login page if not logged in
              !user &&
              (newValue === 'profile' || newValue === 'history')
            ) {
              navigate('/login')
            } else {
              // Navigate to home page
              navigate('/')
            }
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<OtherHousesOutlined />}
          />
          <BottomNavigationAction
            label="Session History"
            value="history"
            icon={<RestoreOutlined />}
          />
          <BottomNavigationAction
            label="Account"
            value="profile"
            icon={<PersonOutlined />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default TabBar
