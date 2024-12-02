import ScheduleAgenda from "./ScheduleAgenda";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { GenericDevider } from "../common/GenericDevider";

export const TimeAgenda = () => {
  return (
    <>
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography variant="h2" fontSize={24} fontWeight={500}>
              8:30
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Palm Court Foyer
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography variant="h2" fontSize={24} fontWeight={500}>
              Good Morning
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Coffee and Croissant
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              9:00
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Palm Court Ballroom
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              Key Developments 2024
            </Typography>
            <Typography fontSize={24} fontWeight={500}>
              & State of the Firm
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              9:35
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Palm Court Ballroom
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              Capiton Focus Sectors
            </Typography>
            <Typography fontSize={24} fontWeight={500}>
              & Dealflow
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              9:45
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Palm Court Ballroom
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              Portfolio Overview
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              10:50-11:05
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Palm Court Foyer
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              Coffee Break
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              11:05-11:55
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              Breakout Session I
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Salon II / Wundex
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Salon III / AlphaPet
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Salon IV / Cedes
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Salon V / Raith
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              11:55-12:45
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              Breakout Session II
            </Typography>
            <Typography
              fontWeight={400}
              variant="body2"
              sx={{ color: "rgb(0 0 0 / 78%)", fontSize: "20px" }}
            >
              Salon II / Wundex
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(0 0 0 / 78%)", fontSize: "20px" }}
            >
              Salon III / AlphaPet
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(0 0 0 / 78%)", fontSize: "20px" }}
            >
              Salon IV / Cedes
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(0 0 0 / 78%)", fontSize: "20px" }}
            >
              Salon V / Raith
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              12:45
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "20px" }}>
              Palm Court Ballroom
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              The Road Ahead
            </Typography>
            <Typography fontSize={24} fontWeight={500}>
              and Q&A
            </Typography>
          </>
        }
      />
      <GenericDevider />
      <ScheduleAgenda
        leftAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              13:00-14:00
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "24px" }}>
              Opera Court
            </Typography>
          </>
        }
        rightAgenda={
          <>
            <Typography fontSize={24} fontWeight={500}>
              Lunch and End of AGM
            </Typography>
          </>
        }
      />
      <Box style={{ marginTop: "140px" }}></Box>
      <GenericDevider />
      <Box>
        <Grid mt={5} item spacing={5}>
          <Grid container>
            <Grid item xs={12} sm={5}></Grid>
            <Grid item xs={12} sm={7}>
              <Box sx={{ display: "flex", gap: "40px" }}>
                <Box>
                  <Typography color="#000">caption AG</Typography>
                  <Typography color="#000">Bleibtreustraße 33</Typography>
                  <Typography color="#000">10707 Berlin</Typography>
                  <Typography color="#000">Germany </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#000" }}>
                    Tel{" "}
                    <Link
                      sx={{ textDecoration: "none", color: "inherit" }}
                      href="tel:+49303159450"
                    >
                      +49 30 315 945 0
                    </Link>
                  </Typography>
                  <Typography sx={{ color: "#000" }}>
                    Fax{" "}
                    <Link
                      sx={{ textDecoration: "none", color: "inherit" }}
                      href="fax:+493031594557"
                    >
                      +49 30 315 945 57
                    </Link>
                  </Typography>
                  <Typography sx={{ color: "#000" }}>
                    <Link
                      sx={{ textDecoration: "none", color: "inherit" }}
                      href="https://www.caption.de"
                      target="_blank"
                      rel="noopener"
                    >
                      www.caption.de
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
