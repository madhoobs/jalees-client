import * as React from 'react'
import {
  Container,
  Box,
  Button,
  Stack,
  Grid,
  Typography,
  Divider,
  CssBaseline
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetChildrenSessions } from '../services/Session'
import SessionCard from '../components/SessionCard'

const AllSessions = () => {
  const [sessions, setSessions] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const handleSessions = async () => {
      const data = await GetChildrenSessions()
      setSessions(data)
    }
    handleSessions()
  }, [sessions])

  const onClick = (e) => {
    navigate(`/sessions?id=${e.currentTarget.id}`, {
      state: {
        session: e.currentTarget.id
      }
    })
  }

  return sessions ? (
    <Container>
      <CssBaseline />
      {/* Hero unit */}
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: { xs: 0, md: 10 }
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Dependants' Caregiving Sessions
            </Typography>
            <Stack
              sx={{ pt: { xs: 2, md: 4 } }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {sessions.map((session) => (
              <SessionCard
                key={session._id}
                session={session}
                onClick={onClick}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </Container>
  ) : null
}

export default AllSessions
