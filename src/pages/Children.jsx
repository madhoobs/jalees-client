import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GetChildren } from '../services/Child'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Container, Box, Typography, CssBaseline } from '@mui/material'

const Children = ({ user }) => {
  let navigate = useNavigate()
  const [children, setChildren] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    // Check user session
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    const handleChildren = async () => {
      const data = await GetChildren()
      setChildren(data)
    }
    handleChildren()
  }, [children])

  return children ? (
    <Container component="main" maxWidth="lg" sx={{ my: 10 }}>
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
          Manage Dependants
        </Typography>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="caption table">
            <caption>
              <Link to={'/dependant/add'}>Add a Child</Link>
            </caption>

            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Relationship</TableCell>
                <TableCell align="right">Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {children.map((child) => (
                <TableRow key={child.name}>
                  <TableCell component="th" scope="row">
                    {child.name}
                  </TableCell>
                  <TableCell align="right">{child.age}</TableCell>
                  <TableCell align="right">{child.relationship}</TableCell>
                  <TableCell align="right">{child.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  ) : null
}

export default Children
