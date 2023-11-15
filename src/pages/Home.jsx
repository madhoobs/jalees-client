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
  }, [caregivers])

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
            pt: { xs: 0, md: 10 }
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Stay Mindful with Jalees!
            </Typography>
            <Typography
              variant="p"
              align="center"
              color="text.secondary"
              paragraph
            >
              Our experienced caregivers will take care of your child&apos;s
              wellbeing
            </Typography>
            <Stack
              sx={{ pt: { xs: 2, md: 4 } }}
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
              <CaregiverCard
                key={caregiver._id}
                caregiver={caregiver}
                onClick={onClick}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </Container>
  )
}

export default Home
