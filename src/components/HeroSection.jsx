import { Box, Typography, Container, useMediaQuery } from "@mui/material";

export default function HeroSection() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        margin:isSmallScreen?"10px":"10px",
        height: "80vh",
        backgroundImage: `url('hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          LABOUR DAY: ENJOY 20% OFF EQ3
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            marginBottom: 2
          }}
        >
          Save on designs made with longevity in mind. Now until September 3rd.
        </Typography>
      </Container>
    </Box>
  );
}
