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
  Link
} from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import dayjs from 'dayjs'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

const NewSessionForm = () => {
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

  const handleSubmit = async (e) => {}

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
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={testChildrenArray}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="place"
                name="place"
                required
                fullWidth
                id="place"
                label="Session Place"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Session Date & Time"
                  defaultValue={dayjs()}
                  minDateTime={dayjs()}
                  format="DD/MM/YYYY hh:mm A"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                name="duration"
                label="Duration"
                type="duration"
                id="duration"
                autoComplete="duration"
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
            Book Session
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

const testChildrenArray = [
  { name: 'Hadi' },
  { name: 'Yasmeen' },
  { name: 'Taim' },
  { name: 'Mutayam' }
]

export default NewSessionForm
