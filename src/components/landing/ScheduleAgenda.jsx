import { Box, Grid, Stack } from "@mui/material";

const ScheduleAgenda = ({ leftAgenda, rightAgenda }) => {
  return (
    <Grid container spacing={2}>
      {/* Left Agenda */}
      <Grid item xs={6} sm={6} sx={{ textAlign: "left" }}>
        {leftAgenda}
      </Grid>

      {/* Right Agenda */}
      <Grid item xs={6} sm={6}>
        <Stack>{rightAgenda}</Stack>
      </Grid>
    </Grid>
  );
};

export default ScheduleAgenda;
