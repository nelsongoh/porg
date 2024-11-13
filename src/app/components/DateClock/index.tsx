"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Clock from './Clock';

export default function DateClock() {
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={2} direction="column">
        <Grid display="flex" justifyContent="center" alignItems="center" spacing={12}>
          <Clock />
        </Grid>
        <Grid spacing={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  )
}