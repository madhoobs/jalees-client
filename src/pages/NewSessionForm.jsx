import * as React from 'react'
import {
  Checkbox,
  TextField,
  Autocomplete,
  Container,
  Grid,
  Box,
  Typography,
  CssBaseline,
  FormControlLabel,
  Button,
  Link,
  InputAdornment
} from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { useLocation, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { GetChildren } from '../services/Child'
import { CreateSession } from '../services/Session'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const NewSessionForm = ({ user }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [children, setChildren] = useState([])
  const [formValues, setFormValues] = useState({
    children: [],
    place: '',
    datetime: dayjs().add(8, 'hour'),
    duration: ''
  })

  useEffect(() => {
    const handleChildren = async () => {
      const data = await GetChildren()
      setChildren(data)
    }
    handleChildren()
  }, [children])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newSession = { ...formValues }
    newSession.caregiver = location.state.caregiver
    newSession.duration = parseInt(formValues.duration)
    newSession.date = dayjs()
    newSession.time = dayjs()
    let createdSession = await CreateSession(newSession)
    navigate(`/sessions?id=${createdSession._id}`)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h5">
          Book a Session
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={children}
                disableCloseOnSelect
                getOptionLabel={(option) => option._id}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      value={option._id}
                    />
                    {option.name}
                  </li>
                )}
                style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Children"
                    placeholder="Select Children for this session"
                  />
                )}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="place"
                required
                fullWidth
                id="place"
                label="Session Place"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  name="datetime"
                  label="Session Date & Time"
                  defaultValue={dayjs().add(8, 'hour')}
                  minDateTime={dayjs().add(3, 'hour')}
                  format="DD/MM/YYYY hh:mm A"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="duration"
                label="Duration"
                type="number"
                id="duration"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">hours</InputAdornment>
                  )
                }}
                onChange={handleChange}
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
            Book Session
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default NewSessionForm
