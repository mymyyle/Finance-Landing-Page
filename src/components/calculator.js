import React from 'react'
import Mortgate from './morgate'
import { Typography, Box, Grid, Button } from '@mui/material'

const Calculator = () => {
  return (
    <Box id="calculator" sx={{ width: '100vw', bgcolor: '#E5E5E5' }}>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={6}>
          <Mortgate />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: '50px', lineHeight: '32.4px' }}>
          <Typography
            sx={{
              fontWeight: '900',
              fontSize: { md: '60px', xs: '40px' },
              mb: '26px',
              lineHeight: '84px',
            }}
          >
            Try our awesome Calculator
          </Typography>
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: '18px',
              mb: '65px',
              color: '#585C65',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: '15px 50px',
              bgcolor: '#FF8049',
              fontWeight: '900',
              fontSize: '18px',
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Calculator
