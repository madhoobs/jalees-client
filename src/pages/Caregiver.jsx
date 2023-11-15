import * as React from 'react'
import {
  Container,
  Box,
  Button,
  Typography,
  Avatar,
  Divider
} from '@mui/material'
import CaregiverRating from '../components/CaregiverRating'
import { useState, useEffect } from 'react'
import { NavLink, useSearchParams, useNavigate } from 'react-router-dom'
import { GetCaregiver } from '../services/Caregiver'

const Caregiver = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [caregiver, setCaregiver] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
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
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          <Avatar aria-label={caregiver.name}>
            {caregiver.name.charAt(0)}
          </Avatar>
          {caregiver.name}
          <CaregiverRating caregiver={caregiver._id} />
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
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
