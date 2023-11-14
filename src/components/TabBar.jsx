import * as React from 'react'
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

const TabBar = () => {
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
