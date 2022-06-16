import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import HeroImgOne from '../assets/heroImgOne.svg'
import HeroImgTwo from '../assets/heroImgTwo.svg'

const Hero = ({ title, description }) => (
  <Box
    sx={{
      bgcolor: '#383F50',
      m: '0 ',
      height: '120vh',
      color: '#fff',
      display: 'flex',
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      pl: { xs: '50px', md: '0' },
    }}
  >
    <Box
      sx={{
        ml: { md: '150px', xs: '20px' },
        width: { md: '40%', xs: '100%' },
        mt: '30vh',
      }}
    >
      <Typography
        sx={{
          fontWeight: '900',
          fontSize: { md: '62px', xs: '40px' },
          mb: { md: '24px', xs: '30px' },
          lineHeight: '80.6px',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          fontWeight: '400',
          fontSize: '18px',
          opacity: '80%',
          mb: { md: '36px', xs: '50px' },
          maxWidth: '410px',
        }}
      >
        {description}
      </Box>
      <Button
        variant="contained"
        sx={{
          padding: '15px 50px',
          bgcolor: '#FF8049',
          fontWeight: '900',
          fontSize: '18px',
        }}
      >
        Learn more
      </Button>
    </Box>
    <Box
      component="img"
      src={HeroImgOne}
      sx={{
        position: 'absolute',
        width: '650px',
        right: 0,
        top: '30%',
        display: { xs: 'none', lg: 'block' },
      }}
    />
    <Box
      component="img"
      src={HeroImgTwo}
      sx={{
        position: 'absolute',
        width: '550px',
        right: 0,
        top: '50%',
        display: { xs: 'none', lg: 'block' },
      }}
    />
  </Box>
)

export default Hero
