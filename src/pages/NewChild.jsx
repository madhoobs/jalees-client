import { Container, Paper, Typography } from '@mui/material'
import ChildForm from '../components/ChildFrom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NewChild = ({ user }) => {
  let navigate = useNavigate()

  useEffect(() => {
    // Check user session
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [])

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Add a New Child
        </Typography>
        <ChildForm user={user} />
      </Paper>
    </Container>
  )
}

export default NewChild
