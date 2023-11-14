import * as React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CaregiverRating from '../components/CaregiverRating'
import { useState, useEffect } from 'react'
import { NavLink, useSearchParams, useNavigate } from 'react-router-dom'
import { GetCaregiver } from '../services/Caregiver'

const Caregiver = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [caregiver, setCaregiver] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    const handleCaregiver = async () => {
      const data = await GetCaregiver(searchParams.get('id'))
      setCaregiver(data)
    }
    handleCaregiver()
  })

  return caregiver ? (
    <Grid item key={caregiver._id} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label={caregiver.name}>
              {caregiver.name.charAt(0)}
            </Avatar>
          }
          title={caregiver.name}
          subheader="Caregiver"
        />
        <CaregiverRating caregiver={caregiver._id} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {caregiver.bio}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ) : null
}

export default Caregiver
