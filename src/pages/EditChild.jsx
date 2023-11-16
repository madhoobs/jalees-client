import { useState, useEffect } from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ChildForm from '../components/ChildFrom'
import { GetChild } from '../services/Child'

const EditChild = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [child, setChild] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    // Check user session
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    const handleChild = async () => {
      const child = await GetChild(searchParams.get('id'))
      setChild(child)
    }
    handleChild()
  }, [])

  return child ? (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Edit Child Information
        </Typography>
        <ChildForm user={user} child={child} />
      </Paper>
    </Container>
  ) : null
}

export default EditChild
