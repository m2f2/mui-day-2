import { Box, Grid2 as Grid, useMediaQuery } from "@mui/material";
import PromoBlock from "../components/PromoBlock";

const promoData = [
  {
    title: "AS LOW AS 0% APR FINANCING",
    description:
      "Affirm provides flexible payment solutions, allowing you to buy better and pay over time.",
    buttonText: "Learn More",
    imageSrc: "/1.jpeg",
  },
  {
    title: "CHOOSE WITH CONFIDENCE",
    description:
      "Remove the guesswork in choosing your upholstery design by ordering swatches.",
    buttonText: "Order Swatches",
    imageSrc: "/hero.jpg",
    reverse: true,
  },
  {
    title: "COMPLIMENTARY DESIGN SERVICES",
    description:
      "Let's create your dream space together with our complimentary design services.",
    buttonText: "Book A Consultation",
    imageSrc: "/3.jpg",
  },
];

export default function PromoSection() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  return (
    <Box sx={{ margin: isSmallScreen || isMediumScreen? "5px" : "20px" }}>
      <Grid container spacing={isSmallScreen  ? 2 : 4} justifyContent="center">
        {promoData.map((promo) => (
          <Grid key={promo.title} item xs={12} sm={12} md={isMediumScreen ? 12 : 6}>
            <PromoBlock
              title={promo.title}
              description={promo.description}
              buttonText={promo.buttonText}
              imageSrc={promo.imageSrc}
              reverse={promo.reverse}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
