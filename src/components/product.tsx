import React from 'react'
import {
  CardContent,
  Card,
  Box,
  Typography,
  Paper,
  Button,
} from '@mui/material'

const Product: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '85%',
        maxWidth: 600,
      }}
    >
      <Paper elevation={3}>
        <Card variant="outlined">
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                gutterBottom
                sx={{
                  color: 'text.secondary',
                  fontSize: 16,
                  fontWeight: 'bold',
                  display: "flex",
                  justifySelf: "start"
                }}
              >
                Fried egg
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: 'text.secondary',
                  fontSize: 16,
                  fontWeight: 'bold',
                  display: 'flex',
                  justifySelf: 'end',
                }}
              >
                R$ 10.00
              </Typography>
            </Box>
            <Typography
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 14 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              quaerat expedita magni consequuntur tempora temporibus nemo
              ipsam. Distinctio, ipsum aut numquam illum reiciendis aperiam
              dignissimos optio laboriosam eum eius aspernatur.
            </Typography>
            <Button size='large' variant="outlined" sx={{ display: 'flex', alignSelf: 'end', borderRadius: 10 }}>Pedir</Button>
          </CardContent>
          <img
            style={{
              width: "100%",
              marginBottom: "-6px"
            }}
            srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=200&fit=crop&auto=format&dpr=2 2x`}
            src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=200&fit=crop&auto=format&dpr=2`}
            loading="lazy"
          />
        </Card>
      </Paper>
    </Box>
  )
}

export default Product