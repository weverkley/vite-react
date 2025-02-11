import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Box, Typography } from '@mui/material'
import Instagram from '@mui/icons-material/Instagram';

import Profile from '../components/profile'
import Link from '../components/link'
import Product from '../components/product';
import Button from '../components/button';
import { QrCode } from '@mui/icons-material';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div style={{
      backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00OTQtYmctMDI2Yy14LmpwZw.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 5,
        }}
      >
        <Profile />
        <Button
          icon={<Instagram />}
        >
          Instagram
        </Button>
        <Button
          icon={<QrCode />}
        >
          PIX QR Code
        </Button>
        <Product />
        <Link />
      </Box>
      <Typography sx={{ display: 'flex', justifyContent: 'center' }}>Copyright @ 2025 - All Rights Reserved</Typography>
    </div>
  )
}
