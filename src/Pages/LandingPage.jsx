import { Box, Button, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

import { ReactTyped } from "react-typed";
import img from "/img.svg";
const LandingPage = () => {
  return (
    <Box
      id="home"
      sx={{
        mt: { xs: "56px", md: "64px" },
        height: {xs:"calc(100vh - 56px)", md:"calc(100vh - 64px)"}
      }}
    >
      <Stack
        direction="row"
        spacing={{ md: 4 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{height: {xs:"calc(100vh - 56px)", md:"calc(100vh - 64px)"}}}
        
      >
        <Box>
          <Typography variant="h6" sx={{ px: 2 }}>
            Hi There!
          </Typography>
          <Typography variant="h4" color={"red"}></Typography>
          <Box sx={{ px: 2 }}>
            <Typography component="span" sx={{ fontSize: "30px" }}>I am </Typography>
            <ReactTyped
              strings={["Nada Elhosary", "Front-End Developer"]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input
              disabled
                className="type"
                style={{ fontSize: "30px", border: 0, color: "#805b6d"}}
              />
            </ReactTyped>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "16px",
            }}
          >
            <Box
              component="a"
              href="https://www.linkedin.com/in/nada-elhosary-0684611a5/"
            >
              <LinkedInIcon
                sx={{ color: "#000", "&:hover": { color: "#805b6d" } }}
                className="icon"
              />
            </Box>
            <Box
              component="a"
              sx={{ color: "#000", "&:hover": { color: "#805b6d" } }}
              className="icon"
              href="mailto:nadaelhosary51@gmail.com"
            >
              <EmailIcon />
            </Box>
            <Box
              component="a"
              sx={{ color: "#000", "&:hover": { color: "#805b6d" } }}
              className="icon"
              href="https://github.com/NadaElho"
            >
              <GitHubIcon />
            </Box>
            {/* <GitHubIcon component="a" href="https://github.com/NadaElho" />
            <EmailIcon component="a" href="mailto:nadaelhosary51@gmail.com" /> */}
          </Box>
          <Button
            component="a"
            variant="outlined"
            sx={{
              mx: "16px",
              borderRadius: "50px",
              color: "black",
              borderWidth: "2px",
              "&:hover": { backgroundColor: "#805b6d", color: "white" }
            }}
            download
            href="../assets/Nada Elhosary.pdf"
          >
            Download CV
          </Button>
        </Box>
        <Box sx={{ width: "40%", display: { xs: "none", md: "block" } }}>
          <img src={img} alt="" />
        </Box>
      </Stack>
    </Box>
  );
};

export default LandingPage;
