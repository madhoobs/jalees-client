import * as React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Auth'
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Stack,
  Divider,
  Paper,
  Snackbar,
  Alert
} from '@mui/material'

const Login = ({ setUser }) => {
  let navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [formFilled, setFormFilled] = useState(false)
  const [message, setMessage] = useState('')
  const [formValues, setFormValues] = useState({
    username: '',
    plainPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const payload = await LoginUser(formValues)
      setFormValues({ username: '', plainPassword: '' })
      setUser(payload)
      navigate('/')
    } catch (error) {
      setOpen(true)
      setMessage('Invalid credentials! Please try again.')
      console.error('Error:', error.response.data.msg)
    }
  }

  useEffect(() => {
    if (formValues.username === '' || formValues.plainPassword === '') {
      setFormFilled(false)
    } else {
      setFormFilled(true)
    }
  }, [formValues])

  return (
    <Grid
      container
      component="main"
      sx={{ height: { xs: '80vh', md: '100vh' } }}
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} component={Paper} square>
        <Box
          sx={{
            my: { xs: 0, md: 10 },
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography component="h1" variant="h4">
                  Sign in
                </Typography>
                <Typography level="body-sm">
                  New to Jalees?{' '}
                  <Link href="/register" level="title-sm">
                    Join Us!
                  </Link>
                </Typography>
              </Stack>
            </Stack>
            <Divider sx={{ margin: '15px' }} />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="plainPassword"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Stack gap={4} sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" />}
                  label="Remember me"
                />
                <Link level="title-sm" href="/resetpassword">
                  Forgot your password?
                </Link>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                disabled={!formFilled}
              >
                Sign In
              </Button>
              <Snackbar open={open} autoHideDuration={6000} message={message}>
                <Alert severity="error">{message}</Alert>
              </Snackbar>{' '}
            </Stack>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage:
            'url(https://images.squarespace-cdn.com/content/v1/64659aaee3191d1432a3ed2d/1684380334908-90CEW2JPZKQ4OU22FEE1/Bez+tytu%C5%82u+%282100%C3%971000+px%29+%282100%C3%971500+px%29+copy+2.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </Grid>
  )
}

export default Login
