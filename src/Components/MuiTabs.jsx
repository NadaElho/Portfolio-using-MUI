import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PortfolioCard from "./Card";
import { Stack } from "@mui/material";
const projects = [
  {
    name: "Memory Game",
    image: "p3.png",
    github: "https://github.com/NadaElho/Memory-game-with-timer",
    liveDemo: "https://nadaelho.github.io/Memory-game-with-timer/",
    category: "Javascript",
  },
  {
    name: "Advice Generator",
    image: "p4.png",
    github: "https://github.com/NadaElho/Advice-generator",
    liveDemo: "https://nadaelho.github.io/Advice-generator/",
    category: "Javascript",
  },
  {
    name: "Speed Typing Test",
    image: "p5.png",
    github: "https://github.com/NadaElho/Speed-Typing",
    liveDemo: "https://nadaelho.github.io/Speed-Typing/",
    category: "Javascript",
  },
  {
    name: "Blogs Website",
    image: "p6.png",
    github: "https://github.com/NadaElho/Blogs-Website",
    liveDemo: "https://blogs-website-gamma.vercel.app/blogs",
    category: "React",
  },
  {
    name: "AgriWise",
    image: "p7.jpeg",
    github: "https://github.com/NadaElho/Blogs-Website",
    liveDemo: "",
    category: "React",
  },
  {
    name: "Cozy Corner",
    image: "p7.png",
    github: "https://github.com/OmarGTolba/E-Commerce-Node.js-Angular-",
    liveDemo: "https://cozy-corner-flame.vercel.app/user/products",
    category: "Angular",
  },
  
];
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Javascript" value="1" sx={{fontWeight: "bold"}}/>
            <Tab label="React" value="2"  sx={{fontWeight: "bold"}}/>
            <Tab label="Angular" value="3"  sx={{fontWeight: "bold"}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack flexDirection="row" flexWrap="wrap" justifyContent="center">
            {projects.map((project) => {
              return (
                project.category == 'Javascript'&&
                <PortfolioCard
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  github={project.github}
                  liveDemo={project.liveDemo}
                  category={project.category}
                />
              );
            })}
          </Stack>
        </TabPanel>
        <TabPanel value="2">
        <Stack flexDirection="row" flexWrap="wrap" justifyContent="center">
            {projects.map((project) => {
              return (
                project.category == 'React'&&
                <PortfolioCard
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  github={project.github}
                  liveDemo={project.liveDemo}
                  category={project.category}
                />
              );
            })}
          </Stack>
        </TabPanel>
        <TabPanel value="3">
        <Stack flexDirection="row" flexWrap="wrap" justifyContent="center">
            {projects.map((project) => {
              return (
                project.category == 'Angular'&&
                <PortfolioCard
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  github={project.github}
                  liveDemo={project.liveDemo}
                  category={project.category}
                />
              );
            })}
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
