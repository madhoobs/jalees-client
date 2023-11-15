import React, { useState } from 'react'
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Rating
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddReview } from '../services/Review'

const NewReview = ({ user }) => {
  let navigate = useNavigate()
  const location = useLocation()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const handleRatingChange = (event, newValue) => {
    setRating(newValue)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let review = {
      rating: rating,
      comment: comment,
      guardian: user.id,
      sessionID: location.state.session
    }
    await AddReview(review)
    navigate(`/sessions?id=${location.state.session}`)
  }

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Submit a Review
        </Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={handleRatingChange}
          precision={0.5}
          size="large"
        />
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Paper>
    </Container>
  )
}

export default NewReview
