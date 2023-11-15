import * as React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'

const SessionCard = ({ session, onClick }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          onClick={onClick}
          id={session._id}
          title={dayjs(session.date).format('MMMM D, YYYY')}
          subheader={`${session.duration} hours session at ${dayjs(
            session.date
          ).format('h:mm A')}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Status: {session.status}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <CardActions>
            <Button size="small" onClick={onClick} id={session._id}>
              Show Details
            </Button>
          </CardActions>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default SessionCard
