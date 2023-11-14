import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser, LoginUser } from '../services/Auth'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material'
import { PersonOutlined } from '@mui/icons-material'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    plainPassword: '',
    firstName: '',
    lastName: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      plainPassword: formValues.plainPassword,
      firstName: formValues.firstName,
      lastName: formValues.lastName
    })
    setFormValues({
      username: '',
      email: '',
      plainPassword: '',
      firstName: '',
      lastName: ''
    })

    // Login user after registering successfully (not working properly)
    const payload = await LoginUser(formValues)
    setUser(payload)
    navigate('/')
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <PersonOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="user-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="plainPassword"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" required />
                }
                label="I agree to the Terms & Conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Register
