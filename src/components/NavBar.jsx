import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ user, handleLogOut }) => {
  let navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleClick = (event) => {
    console.log(event.target.innerText)
    if (event.target.innerText === 'Account') {
      navigate('/account')
    } else if (event.target.innerText === 'My Dependants') {
      navigate('/account/dependants')
    }
    setAnchorElUser(null)
  }

  let userOptions
  if (user) {
    userOptions = (
      <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Account" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key="account" onClick={handleClick}>
            <Typography textAlign="center">Account</Typography>
          </MenuItem>
          <MenuItem key="dependants" onClick={handleClick}>
            <Typography textAlign="center">My Dependants</Typography>
          </MenuItem>
          <MenuItem key="logout" onClick={handleLogOut}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    )
  }

  const visitorOptions = (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex', flexDirection: 'flex-end' }
      }}
    >
      <Button
        key="login"
        href="/login"
        sx={{ my: 2, color: '#222222', display: 'block' }}
      >
        Login
      </Button>
      <Button
        key="register"
        href="/register"
        sx={{ my: 2, display: 'block' }}
        variant="outlined"
      >
        Register
      </Button>
    </Box>
  )

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#F7F7F7', color: '#222222', boxShadow: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <img
              src="/logo.svg"
              width={120}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' }
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton sx={{ display: { xs: 'none', md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <img src="/logo.svg" width={120} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="home"
              href="/"
              sx={{ my: 2, color: '#222222', display: 'block' }}
            >
              Home
            </Button>
            <Button
              key="about"
              href="/about"
              sx={{ my: 2, color: '#222222', display: 'block' }}
            >
              About
            </Button>
            <Button
              key="contact"
              href="/contact"
              sx={{ my: 2, color: '#222222', display: 'block' }}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {user ? userOptions : visitorOptions}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
