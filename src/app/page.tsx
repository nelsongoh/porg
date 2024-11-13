"use client";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Typography } from "@mui/material";
import DateClock from './components/DateClock';
import styles from "./page.module.css";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid id="content-left" size={2}>
          <DateClock />
        </Grid>
        <Grid id="content-center" size={8}>
          <Typography variant="h2">HI</Typography>
        </Grid>
        <Grid id="content-right" size={2}>
          <Typography variant="h2">HI</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
