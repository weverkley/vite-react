import React, { ReactNode } from 'react'
import {
  Button as MuiButton,
} from '@mui/material'

interface ButtonProps {
  icon?: ReactNode;
  children: ReactNode | ReactNode[];
}

const Button: React.FC<ButtonProps> = ({ icon, children }) => {
  return (
    <MuiButton
      size="large"
      color="inherit"
      component="label"
      variant="contained"
      startIcon={icon}
      sx={{ borderRadius: 10, width: "85%", maxWidth: 600 }}
    >
      {children}
    </MuiButton>
  )
}

export default Button