// import { Breadcrumbs, Button, Link, Stack, Typography } from "@mui/material";
// import PlaceIcon from "@mui/icons-material/Place";
// import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import PersonIcon from "@mui/icons-material/Person";
// import LanguageIcon from "@mui/icons-material/Language";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// const TopBar = () => {
//   return (
//     <Stack flexDirection="row" justifyContent="space-between" margin="15px"> 
//       <Typography variant="h3">EQ3</Typography>
//       <Stack flexDirection="row" alignItems="center" gap="10px">
//         <Breadcrumbs aria-label="breadcrumb">
//           <Link color="inherit" href="/">
//             <PlaceIcon />
//           </Link>
//           <Link
//             color="inherit"
//             href="/material-ui/getting-started/installation/"
//           >
//             <QuestionMarkIcon />
//           </Link>
//           <Link
//             color="inherit"
//             href="/material-ui/getting-started/installation/"
//           >
//             <FavoriteIcon />
//           </Link>
//           <Link
//             color="inherit"
//             href="/material-ui/getting-started/installation/"
//             underline="none"
//           >
//             <Typography display="flex" alignItems="center"> <PersonIcon /> Join / Login To EQ3</Typography>
//           </Link>
//           <Link
//             color="inherit"
//             href="/material-ui/getting-started/installation/"
//             underline="none"
//             sx={{ display: "flex", gap: 1 }}
//           >
//             <LanguageIcon />
//             <Typography>EN / AR</Typography>
//           </Link>
//         </Breadcrumbs>
//         <Button variant="outlined" color="black">
//           <Typography
//             variant="body1"
//             sx={{ display: "flex", alignItems: "center" }}
//           >
//             <ShoppingCartIcon /> Cart (0)
//           </Typography>
//         </Button>
//       </Stack>
//     </Stack>
//   );
// };

// export default TopBar;
import { Breadcrumbs, Button, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";

const TopBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      flexDirection={isSmallScreen ? "column" : "row"}
      justifyContent="space-between"
      alignItems="center"
      margin="15px"
      sx={{ gap: isSmallScreen ? "20px" : "0" }}
    >
      <Typography variant={isSmallScreen ? "h4" : "h3"}>EQ3</Typography>
      
      <Stack
        flexDirection="row"
        alignItems="center"
        gap="10px"
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
          gap: isSmallScreen ? "15px" : "10px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ display: "flex", flexWrap: "wrap", gap: isSmallScreen ? 1 : 0 }}>
          <Link color="inherit" href="/">
            <PlaceIcon />
          </Link>
          <Link color="inherit" href="/">
            <QuestionMarkIcon />
          </Link>
          <Link color="inherit" href="/">
            <FavoriteIcon />
          </Link>
          <Link color="inherit" href="/" underline="none">
            <Typography display="flex" alignItems="center">
              <PersonIcon /> {!isSmallScreen && "Join / Login To EQ3"}
            </Typography>
          </Link>
          <Link color="inherit" href="/" underline="none" sx={{ display: "flex", gap: 1 }}>
            <LanguageIcon />
            <Typography>{isSmallScreen ? "EN" : "EN / AR"}</Typography>
          </Link>
        </Breadcrumbs>

        <Button
          variant="outlined"
          color="black"
          sx={{ padding: isSmallScreen ? "8px" : "10px 20px" }}
        >
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingCartIcon /> {isSmallScreen ? "(0)" : "Cart (0)"}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};

export default TopBar;