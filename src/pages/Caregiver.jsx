import * as React from 'react'
import {
  Container,
  Box,
  Button,
  Typography,
  Avatar,
  Divider,
  Badge
} from '@mui/material'
import { styled } from '@mui/material/styles'
import CaregiverRating from '../components/CaregiverRating'
import { useState, useEffect } from 'react'
import { NavLink, useSearchParams, useNavigate } from 'react-router-dom'
import { GetCaregiver } from '../services/Caregiver'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))

const Caregiver = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [caregiver, setCaregiver] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    // Check user session
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    const handleCaregiver = async () => {
      const data = await GetCaregiver(searchParams.get('id'))
      setCaregiver(data)
    }
    handleCaregiver()
  })

  const onClick = (e) => {
    navigate('/session/new', {
      state: {
        caregiver: caregiver._id
      }
    })
  }

  return caregiver ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Container
        component="main"
        sx={{ mt: { xs: -4, md: 8 }, mb: 2 }}
        maxWidth="sm"
      >
        <Typography variant="h5" component="h1" gutterBottom>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt={caregiver.name.charAt(0)}
              src="/static/images/avatar/1.jpg"
            />
          </StyledBadge>
          <br />
          <br />
          {caregiver.name}
          <CaregiverRating caregiver={caregiver._id} />
        </Typography>
        <Typography variant="h7">
          Babysitting fees: <b>{caregiver.rate}</b> BD/hr
        </Typography>
        <br />
        <Divider sx={{ margin: '25px' }} />
        <Typography color="primary">About {caregiver.name}:</Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {caregiver.bio}
        </Typography>
        <Divider sx={{ margin: '25px' }} />
        <Typography component="p" gutterBottom>
          Do you want {caregiver.name} to take care of your child? Connect with
          her now!
        </Typography>
        <br />
        <Button variant="contained" size="large" onClick={onClick}>
          Book a Session
        </Button>
      </Container>
    </Box>
  ) : null
}

export default Caregiver
