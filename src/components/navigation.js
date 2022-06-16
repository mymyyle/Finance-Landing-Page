import React from 'react'
import { Link } from 'gatsby'
import './global.css'
import * as styles from './navigation.module.css'
import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Navigation = () => (
  <Box
    style={{
      bgcolor: '#383F50',
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: '100',
    }}
  >
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Box className={styles.logoLink}>
        <Avatar sx={{ bgcolor: '#FF8049', width: 53, height: 53 }}>K</Avatar>
        <Typography
          style={{ fontSize: '20px', marginLeft: '20px', fontWeight: '700' }}
        >
          Kinka <br />
          Finance
        </Typography>
      </Box>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="#calculator" activeClassName="active">
            <Typography style={{ fontSize: '18px', fontWeight: '400' }}>
              Calculator
            </Typography>
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="#services" activeClassName="active">
            <Typography
              style={{
                fontSize: '18px',
                fontWeight: '400',
              }}
            >
              Services
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  </Box>
)

export default Navigation
