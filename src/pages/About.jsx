import React from 'react'
import { Container, Typography, Paper } from '@mui/material'

const About = () => {
  return (
    <Container sx={{ padding: '30px', paddingBottom: '40px' }}>
      <Typography variant="h4" gutterBottom>
        About Jalees
      </Typography>
      <Typography variant="body1" paragraph>
        To parents who care about the wellbeing of their children and want to be
        mindful about it, Jalees is the childcare platform that provides
        trustworthy caregivers for your child because we believe that your child
        deserves to be taken care of, and you deserve to enjoy your life.
      </Typography>
      {/* Add more content as needed */}
    </Container>
  )
}

export default About
