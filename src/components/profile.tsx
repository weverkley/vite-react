import React from 'react'
import {
  CardContent,
  Card,
  Box,
  Typography,
  Avatar,
  CardActions,
  Button,
  Paper,
} from '@mui/material'
import Share from '@mui/icons-material/Share';

const Profile: React.FC = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '85%',
        maxWidth: 600,
      }}
    >
      <Avatar
        sx={{
          width: 150,
          height: 150,
          position: 'relative',
          top: '50px',
          border: '3px solid white',
        }}
        alt="User Avatar"
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Paper elevation={3}>
        {/* <Share sx={{ position: 'absolute', top: 260, left: 470 }} /> */}
        <Card variant="outlined">
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Typography
              gutterBottom
              sx={{
                color: 'text.secondary',
                fontSize: 16,
                fontWeight: 'bold',
                mt: 5,
              }}
            >
              Jhon Doe
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 14 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              quaerat expedita magni consequuntur tempora temporibus nemo
              ipsam. Distinctio, ipsum aut numquam illum reiciendis aperiam
              dignissimos optio laboriosam eum eius aspernatur.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='large' variant="outlined" sx={{ borderRadius: 10 }}>
              Salvar na agenda
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Box>
  )
}

export default Profile