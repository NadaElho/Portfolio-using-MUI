import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import { Box, Container } from "@mui/material";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import Footer from "./Pages/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Container>
        <LandingPage />
        <About />
        <Portfolio />
        <Skills/>
        <Contact />
      </Container>
      <Footer/>
    </Box>
  );
}

export default App;
