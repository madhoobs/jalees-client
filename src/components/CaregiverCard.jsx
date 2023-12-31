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
import { Box, IconButton } from '@mui/material'

const CaregiverCard = ({ caregiver, onClick }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          onClick={onClick}
          id={caregiver._id}
          avatar={
            <Avatar aria-label={caregiver.name}>
              {caregiver.name.charAt(0)}
            </Avatar>
          }
          action={
            <Box align="center" sx={{ mx: 3 }}>
              <Typography variant="h6" color="primary">
                <b>{caregiver.rate}</b>
              </Typography>
              <Typography variant="p">BD/hr</Typography>
            </Box>
          }
          title={<Typography variant="h7">{caregiver.name}</Typography>}
          subheader={<CaregiverRating caregiver={caregiver._id} />}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {caregiver.bio}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <CardActions>
            <Button size="small" onClick={onClick} id={caregiver._id}>
              Book a Session
            </Button>
          </CardActions>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CaregiverCard
