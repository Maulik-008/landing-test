import { useTheme } from "@emotion/react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const backgroundImage = isMobile
    ? '/image/GRAFIC_MOBILE.jpg'  // Mobile image
    : '/image/GRAFIC_WEB.png';    // Desktop image

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "top center", md: "top center" },
        minHeight: "700px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: "100px", md: "200px" },
          paddingBottom: { xs: "50px", md: "60px" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "36px",
            lineHeight: "1.1",
            fontWeight: '400'
          }}
        >
          We <br /> welcome <br /> you to
        </Typography>
        <Typography
          sx={{
            color: "white",
            textAlign: "right",
            fontSize: "36px",
            lineHeight: "1.1",
            fontWeight: '400'
          }}
        >
          2024 <br /> December <br /> 3rd
        </Typography>
        <Typography
          variant="h1"
          mt={2}
          sx={{
            color: "white",
            paddingBottom: "60px",
            fontSize: { xs: "45px", md: "60px" },
            fontWeight: '500'
          }}
        >
          caption <br /> Annual General
          <br /> Meeting 2024
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
