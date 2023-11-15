import React from 'react'
import { Container, Typography, Paper, TextField, Button } from '@mui/material'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add contact form submission logic
    console.log('Form submitted!')
  }

  return (
    <Container sx={{ padding: '30px', paddingBottom: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Contact
