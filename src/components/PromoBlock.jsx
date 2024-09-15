import { Button, Typography, useMediaQuery } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";

const PromoBlock = ({ title, description, buttonText, imageSrc, reverse }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  const isLargeScreen = useMediaQuery("(min-width:901px)"); 

  return (
    <Grid
      container
      spacing={isSmallScreen ? 2 : 4}
      alignItems="center"
      justifyContent={isSmallScreen || isMediumScreen ? "center" : "flex-start"}
      sx={{
        marginTop: "20px",
        backgroundColor: "#eee",
        paddingLeft: reverse && isLargeScreen ? "40px" : "0px",
      }}
      direction={isSmallScreen ? "column" : reverse ? "row-reverse" : "row"}
    >
      <Grid xs={12} md={6}>
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: isSmallScreen || isMediumScreen ? "100%" : "44vw",
            height: "auto",
          }}
        />
      </Grid>
      <Grid
        xs={12}
        md={6}
        sx={{ textAlign: isSmallScreen || isMediumScreen ? "center" : "left", margin:"20px"}}
      >
        <Typography variant="h4" >
          {title}
        </Typography>
        <Typography variant="body1" my="20px" >
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: isSmallScreen || isMediumScreen ? "10px" : "20px",
            margin: isSmallScreen || isMediumScreen ? "30px" : 0,
          }}
        >
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};

export default PromoBlock;