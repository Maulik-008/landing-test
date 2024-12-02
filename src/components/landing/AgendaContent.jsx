import { Typography, Stack } from "@mui/material";

const AgendaContent = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack>
        <Typography fontSize={24} fontWeight={500}>
          Tuesday
        </Typography>
        <Typography>3rd December 2024</Typography>
      </Stack>
      <Stack>
        <Typography fontSize={24} fontWeight={500}>
          Location
        </Typography>
        <Typography variant="body2">Hotel de Rome</Typography>
        <Typography variant="body2">Behrenstr.37</Typography>
        <Typography variant="body2">10117 Berlin</Typography>
      </Stack>
    </Stack>
  );
};
export default AgendaContent;
