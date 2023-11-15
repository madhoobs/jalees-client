import { useState, useEffect } from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ChildForm from '../components/ChildFrom'
import { GetChild } from '../services/Child'

const EditChild = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [form, setForm] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    // Check user session
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    const handleChild = async () => {
      const child = await GetChild(searchParams.get('id'))
      setForm(<ChildForm user={user} child={child} />)
      console.log(child)
    }
    handleChild()
  }, [form])

  return form ? (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Edit Child Information
        </Typography>
        {form}
      </Paper>
    </Container>
  ) : null
}

export default EditChild
