import * as React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAllCaregivers } from '../services/Caregiver'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CaregiverCard from '../components/CaregiverCard'

const Home = () => {
  const [caregivers, setCaregivers] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const handleCaregivers = async () => {
      const data = await GetAllCaregivers()
      setCaregivers(data)
    }
    handleCaregivers()
  })

  const onClick = (e) => {
    // Navigating to selected Caregiver page
    navigate('/caregiver?id=' + e.currentTarget.id)
  }

  return (
    <Container>
      <CssBaseline />
      {/* Hero unit */}
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Jalees
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Your child&apos;s wellbeing is our priority,
              <br />
              and your peace of mind is our commitment!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {caregivers.map((caregiver) => (
              <CaregiverCard caregiver={caregiver} onClick={onClick} />
            ))}
          </Grid>
        </Container>
      </main>
    </Container>
  )
}

export default Home
