import React from 'react'

import { Box, Card, Grid, Typography } from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Box
      id="services"
      sx={{
        width: '100vw',
        bgcolor: ' #E5E5E5',
        m: '0',
        p: '0',
      }}
    >
      <Typography
        sx={{
          fontWeight: '900',
          fontSize: { md: '60px', xs: '40px' },
          m: '0 auto',
          p: '160px 0 60px 0',
          maxWidth: '680px',
          textAlign: 'center',
        }}
      >
        High Quality Output, Awesome Service
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ m: { lg: '0 150px', xs: '0' }, pb: '272px' }}
      >
        {posts.map((post) => {
          return (
            <Grid key={post.node.id} item xs={12} lg={3} sm={6}>
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  p: '50px 35px',
                  m: '0',
                  height: '410px',
                  maxWidth: '350px',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: '97px',
                    height: '97px',
                    backgroundColor: '#FF8049',
                    boxShadow: '0px 4px 70px rgba(91, 91, 91, 0.05)',
                    borderRadius: '100px',
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      width: '44px',
                      height: '44px',
                      m: '27px',
                      color: '#fff',
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '30px',
                    mb: '25px',
                    mt: '45px',
                  }}
                >
                  {post.node.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    textAlign: 'center',
                    color: '#585C65',
                  }}
                >
                  {post.node.description}
                </Typography>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ArticlePreview
