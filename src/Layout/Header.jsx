import { Divider } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

function Header() {
  return (
    <>
      <TopBar/>
      <Navbar/>
      <HeroSection/>
      <Divider sx={{ margin: '20px 0', borderColor: '#000', borderWidth: '5px' }}/>
    </>
  );
}

export default Header;
