import * as React from 'react'
import { Container, Box, Button, Typography, Divider } from '@mui/material'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { useState, useEffect } from 'react'
import { NavLink, useSearchParams, useNavigate } from 'react-router-dom'
import { GetSession } from '../services/Session'
import { GetSessionReview } from '../services/Review'
import dayjs from 'dayjs'

const Session = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [session, setSession] = useState(null)
  const [reviewed, setReviewed] = useState(false)
  const [review, setReview] = useState([])
  let navigate = useNavigate()

  let childrenNames = ''

  useEffect(() => {
    const handleSession = async () => {
      const data = await GetSession(searchParams.get('id'))
      setSession(data)
      session.children.forEach((child) => {
        childrenNames = `${childrenNames} ${child.name},`
      })
      childrenNames = childrenNames.slice(0, -1)

      // Get review details
      const checkReview = await GetSessionReview(searchParams.get('id'))
      console.log(checkReview)
      if (checkReview) {
        setReviewed(true)
        setReview(checkReview)
      }
    }
    handleSession()
  }, [session, review])

  const onClick = (e) => {
    navigate('/review/add', {
      state: {
        session: session._id
      }
    })
  }

  let reviewSection = reviewed ? (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Session Details
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom></Typography>
      <Divider sx={{ margin: '25px' }} />
      <Typography component="p" gutterBottom>
        <b>Rating:</b>{' '}
        <Rating
          name="text-feedback"
          value={review.rating}
          precision={0.5}
          readOnly
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Typography>
      <Typography component="p" gutterBottom>
        <b>Comment:</b> {review.comment}
      </Typography>
    </Container>
  ) : (
    <Button variant="contained" size="large" onClick={onClick}>
      Add a Review
    </Button>
  )

  return session ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Session Details
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom></Typography>
        <Divider sx={{ margin: '25px' }} />
        <Typography component="p" gutterBottom>
          <b>Session Status:</b> {session.status}
        </Typography>
        <Typography component="p" gutterBottom>
          <b>Date:</b> {dayjs(session.date).format('MMMM D, YYYY h:mm A')}
        </Typography>
        <Typography component="p" gutterBottom>
          <b>Place:</b> {session.place}
        </Typography>
        <Typography component="p" gutterBottom>
          <b>Children:</b> {childrenNames}
        </Typography>
        <Typography component="p" gutterBottom>
          <b>Duration:</b> {session.duration}
        </Typography>
        <Typography component="p" gutterBottom>
          <b>Total Price:</b> BD {session.price}
        </Typography>
        <br />
        {reviewSection}
      </Container>
    </Box>
  ) : null
}

export default Session
