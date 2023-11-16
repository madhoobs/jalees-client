import React, { useState, useEffect } from 'react'
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ListSubheader
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { CreateChild, EditChild } from '../services/Child'

const ChildForm = ({ user, child }) => {
  let navigate = useNavigate()
  const [childData, setChildData] = useState({
    name: '',
    age: '',
    relationship: '',
    notes: ''
  })

  const handleChange = (e) => {
    setChildData({
      ...childData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (child) {
      await EditChild(child._id, childData)
    } else {
      await CreateChild(childData)
    }
    navigate('/account/dependants')
  }

  useEffect(() => {
    if (child) {
      let edit = true
      setChildData(child)
    }
  }, [child])

  return (
    <Box>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={childData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Age"
        variant="outlined"
        fullWidth
        margin="normal"
        name="age"
        type="number"
        value={childData.age}
        onChange={handleChange}
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="demo-simple-select-label">Relationship</InputLabel>
        <Select
          label="Relationship"
          variant="outlined"
          value={childData.relationship}
          name="relationship"
          onChange={handleChange}
        >
          <ListSubheader>I'm a Parent</ListSubheader>
          <MenuItem value="Son">Son</MenuItem>
          <MenuItem value="Daughter">Daughter</MenuItem>
          <ListSubheader>I'm a Grandparent</ListSubheader>
          <MenuItem value="Grandson">Grandson</MenuItem>
          <MenuItem value="Granddaughter">Granddaughter</MenuItem>
          <ListSubheader>I'm an Uncle or Auntie</ListSubheader>
          <MenuItem value="Nephew">Nephew</MenuItem>
          <MenuItem value="Niece">Niece</MenuItem>
          <ListSubheader>I'm a Cousin</ListSubheader>
          <MenuItem value="Cousin">Cousin</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Notes"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        name="notes"
        value={childData.notes}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  )
}

export default ChildForm
