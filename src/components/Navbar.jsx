import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Link, Stack, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const menuItems = [
  { label: "Living", link: "/living" },
  { label: "Dining", link: "/dining" },
  { label: "Bedroom", link: "/bedroom" },
  { label: "Outdoor", link: "/outdoor" },
  { label: "Office", link: "/office" },
  { label: "Lighting", link: "/lighting" },
  { label: "Rugs", link: "/rugs" },
  { label: "Accessories", link: "/accessories" },
  { label: "Brands", link: "/brands" },
  { label: "Inspiration", link: "/inspiration" },
  { label: "Gifts", link: "/gifts" },
  { label: "Sale", link: "/sale" },
];

export default function SearchAppBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {!isSmallScreen && (
            <Box sx={{ display: "flex", gap: "25px" }}>
              {menuItems.slice(0, 8).map((item) => (
                <Link href={item.link} underline="none" key={item.label}>
                  <Typography color="#000">{item.label}</Typography>
                </Link>
              ))}
            </Box>
          )}

          {isSmallScreen && (
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          )}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Box
        bgcolor="warning.main"
        sx={{ display: "flex", justifyContent: "center", padding: 1 }}
      >
        <Typography variant={isSmallScreen ? "body2" : "body1"}>
          Labour Day: Enjoy 20% Off EQS
        </Typography>
      </Box>
    </Box>
  );
}