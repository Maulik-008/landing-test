import { Typography, Stack, Container } from "@mui/material";
import ScheduleAgenda from "./ScheduleAgenda";
import { TimeAgenda } from "./TimeAgenda";
import { GenericDevider } from "../common/GenericDevider";

const Agenda = () => {
  return (
    <Stack
      alignItems="center"
      sx={{ marginTop: "120px", marginBottom: "40px" }}
      spacing={2}
      justifyContent={"center"}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" fontWeight={400} mb={2}>
          Agenda
        </Typography>
        <GenericDevider styles={{ opacity: 0.5 }} />
        <Stack spacing={2} mt={3}>
          <ScheduleAgenda
            leftAgenda={
              <>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "24px", fontWeight: "500" }}
                >
                  Tuesday
                </Typography>
                <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                  3rd December{" "}
                </Typography>
                <Typography sx={{ fontSize: "24px", fontWeight: "500" }}>
                  2024
                </Typography>
              </>
            }
            rightAgenda={
              <>
                <Typography fontSize={24} fontWeight={500}>
                  Location
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "20px" }}>
                  Hotel de Rome
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "20px" }}>
                  Behrenstr.37
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "20px" }}>
                  10117 Berlin
                </Typography>
              </>
            }
          />
          <GenericDevider />
          <TimeAgenda />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Agenda;
