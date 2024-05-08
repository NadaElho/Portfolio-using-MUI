import { Box } from "@mui/material";
import Header from "../Components/Header";
import MuiTabs from "../Components/MuiTabs";

const Portfolio = () => {
  
  return (
    <Box id="portfolio">
      <Header title="Portfolio" subtitle="My Portfolio" />
      <MuiTabs />
    </Box>
  );
};

export default Portfolio;
