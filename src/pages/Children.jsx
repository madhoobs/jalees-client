import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteChild, GetChildren } from '../services/Child'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
  Container,
  Box,
  Typography,
  CssBaseline,
  IconButton,
  Button
} from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const Children = ({ user }) => {
  let navigate = useNavigate()
  const [children, setChildren] = useState(null)

  const handleDelete = async (e) => {
    await DeleteChild(e.currentTarget.id)
  }

  const handleEdit = async (e) => {
    navigate(`/dependant/edit?id=${e.currentTarget.id}`)
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
    <Container component="main" maxWidth="lg" sx={{ my: { xs: -5, md: 10 } }}>
      <CssBaseline />
      <Box
        sx={{
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
              <Button
                variant="outlined"
                startIcon={<AddCircleOutlineOutlinedIcon />}
                href={'/dependant/add'}
              >
                Add a Child
              </Button>
            </caption>

            <TableHead sx={{ background: '#FF5A60' }}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>
                  <b>Name</b>
                </TableCell>
                <TableCell align="left" sx={{ color: 'white' }}>
                  <b>Age</b>
                </TableCell>
                <TableCell align="left" sx={{ color: 'white' }}>
                  <b>Relationship</b>
                </TableCell>
                <TableCell align="left" sx={{ color: 'white' }}>
                  <b>Notes</b>
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>
                  <b>Edit</b>
                </TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>
                  <b>Delete</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {children.map((child) => (
                <TableRow key={child.name}>
                  <TableCell component="th" scope="row">
                    {child.name}
                  </TableCell>
                  <TableCell align="left">{child.age}</TableCell>
                  <TableCell align="left">{child.relationship}</TableCell>
                  <TableCell align="left">{child.notes}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      id={child._id}
                      onClick={handleEdit}
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      id={child._id}
                      onClick={handleDelete}
                    >
                      <DeleteOutlinedIcon />
                    </IconButton>
                  </TableCell>
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
