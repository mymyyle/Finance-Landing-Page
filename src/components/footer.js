import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const infos = [
  { title: 'Location', subTitle: ['American', 'Asia', 'Europe', 'Africa'] },
  { title: 'Contact', subTitle: ['About Me', 'Teams', 'Profile', 'FAQ'] },
  { title: 'Legals', subTitle: ['Privacy', 'Disclaimer', 'Terms', 'Company'] },
]
export const IconSocial = ({ icon }) => {
  return (
    <Box
      sx={{
        width: '50px',
        height: '50px',
        backgroundColor: '#FF8049',
        boxShadow: '0px 4px 70px rgba(91, 91, 91, 0.05)',
        borderRadius: '100px',
        color: '#fff',
        p: '13px',
      }}
    >
      {icon}
    </Box>
  )
}
const Footer = () => (
  <Box
    sx={{
      pt: '140px',
      bgcolor: '#E5E5E5',
      display: 'flex',
      flexDirection: { lg: 'row', xs: 'column' },
      pb: '60px',
    }}
  >
    <Box
      id="contact-footer"
      sx={{
        pl: { lg: '150px', xs: '50px' },
        width: '100%',
        maxWidth: '100vw',
        mb: '60px',
      }}
    >
      <Box
        id="ava-footer"
        sx={{
          display: 'flex',
          gap: '10px',
          mb: '26px',
        }}
      >
        <Avatar sx={{ bgcolor: '#16222D', width: 53, height: 53 }}>K</Avatar>
        <Typography
          style={{ fontSize: '20px', marginLeft: '20px', fontWeight: '700' }}
        >
          Kinka <br />
          Finance
        </Typography>
      </Box>
      <Typography
        style={{
          fontSize: '20px',
          fontWeight: '400',
          color: '#585C65',
          marginBottom: '40px',
          maxWidth: '372px',
        }}
      >
        2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
      </Typography>
      <Box id="social" sx={{ display: 'flex', gap: '30px' }}>
        <IconSocial icon={<FacebookOutlinedIcon />} />
        <IconSocial icon={<InstagramIcon />} />
        <IconSocial icon={<TwitterIcon />} />
      </Box>
    </Box>

    <Grid container spacing={2} sx={{ pl: '50px' }}>
      {infos.map((info) => (
        <Grid item xs={4} key={info.title}>
          <Stack spacing={3}>
            <Typography
              sx={{ fontSize: '20px', fontWeight: '700', lineHeight: '36px' }}
            >
              {info.title}
            </Typography>
            {info.subTitle.map((sub) => (
              <Typography
                key={sub}
                sx={{
                  fontSize: '18px',
                  fontWeight: '400',
                  lineHeight: '32.4px',
                  color: '#70737C',
                }}
              >
                {sub}
              </Typography>
            ))}
          </Stack>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default Footer
