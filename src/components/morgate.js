import { Box, Grid, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

export function NonLinearSlider({ content, value, setValue, min, max }) {
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue)
    }
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography
        id="non-linear-slider"
        gutterBottom
        sx={{ fontWeight: '900', fontSize: '16px', lineHeight: '32.4px' }}
      >
        {content}
      </Typography>
      <Slider
        value={value}
        min={min}
        step={1}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        sx={{ color: '#FF8049' }}
      />
    </Box>
  )
}

const Morgate = () => {
  const [purchase, setPurchase] = useState(450)
  const [downPayment, setDownPayment] = useState(135)
  const [repaymentTime, setRepaymentTime] = useState(25)
  const [interestRate, setInterestRate] = useState(3)

  return (
    <Box
      sx={{
        bgcolor: '#383F50',
        minHeight: '540px',
        lineHeight: '32.4px',
        color: '#fff',
        pt: '65px',
        pb: '70px',
        pl: { lg: '150px', xs: '50px' },
        pr: '46px',
      }}
    >
      <Typography
        sx={{
          fontWeight: '900',
          fontSize: '50px',
          lineHeight: '70px',
        }}
      >
        Mortgage Calculator
      </Typography>
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '18px',
          mb: '40px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <NonLinearSlider
            content={`Purchase Price:$${purchase},000`}
            value={purchase}
            setValue={setPurchase}
            min={1}
            max={999}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <NonLinearSlider
            content={`Down Payment:$${downPayment},000`}
            value={downPayment}
            setValue={setDownPayment}
            min={1}
            max={999}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <NonLinearSlider
            content={`Repayment time:${repaymentTime} years`}
            value={repaymentTime}
            setValue={setRepaymentTime}
            min={1}
            max={50}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <NonLinearSlider
            content={`Interest Rate:${interestRate}%`}
            value={interestRate}
            setValue={setInterestRate}
            min={1}
            max={10}
          />
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontWeight: '900',
          fontSize: '18px',
          mb: '20px',
        }}
      >
        Loan amount:
        <Typography
          component="span"
          sx={{
            fontWeight: '900',
            fontSize: '24px',
            color: '#FF8049',
          }}
        >
          ${purchase - downPayment},000
        </Typography>
      </Typography>
      <Typography
        sx={{
          fontWeight: '900',
          fontSize: '18px',
        }}
      >
        Estimated repayment per month:
        <Typography
          component="span"
          sx={{
            fontWeight: '900',
            fontSize: '24px',
            color: '#FF8049',
          }}
        >
          $
          {Math.floor(
            ((purchase - downPayment) *
              1000 *
              ((interestRate / 100) *
                (interestRate / 100 + 1) ** repaymentTime)) /
              ((interestRate / 100 + 1) ** repaymentTime - 1)
          )}
        </Typography>
      </Typography>
    </Box>
  )
}

export default Morgate
