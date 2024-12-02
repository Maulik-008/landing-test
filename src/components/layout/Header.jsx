import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Container,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="lg">
        <Toolbar sx={{ paddingInline: "0px !important" }}>
          <Box sx={{ flexGrow: 1 }}>
            <img src="/image/logo.svg" />
          </Box>
          <Stack>
            <Typography>Annual General</Typography>
            <Typography display={"flex"} justifyContent={"end"}>
              Meeting 2024
            </Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
