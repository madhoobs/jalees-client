import React, { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { CreateChild } from '../services/Child'

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
    await CreateChild(childData)
    navigate('/account/dependants')
  }

  useEffect(() => {
    if (child) {
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
      <TextField
        label="Relationship"
        variant="outlined"
        fullWidth
        margin="normal"
        name="relationship"
        value={childData.relationship}
        onChange={handleChange}
        required
      />
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
