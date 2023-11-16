import { GetCaregiverRating } from '../services/Review'
import { useState, useEffect } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { Typography } from '@mui/material'

const CaregiverRating = ({ caregiver }) => {
  const [rating, setRating] = useState({ rating: 5, reviews: 0 })

  useEffect(() => {
    const handleRating = async () => {
      const data = await GetCaregiverRating(caregiver)
      setRating(data)
    }
    handleRating()
  })

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: -0.5
      }}
    >
      <Rating
        name="text-feedback"
        value={rating.rating}
        precision={0.5}
        readOnly
        size="small"
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Typography component="p">&nbsp;({rating.reviews})</Typography>
    </Box>
  )
}

export default CaregiverRating
