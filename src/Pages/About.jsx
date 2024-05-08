import React from "react";
import Header from "../Components/Header";
import { Box, Stack, Typography } from "@mui/material";
import aboutImage from "/about.svg";

let data = [
  { key: "Name:", value: "Nada Elhosary" },
  { key: "Age:", value: "24" },
  { key: "Education:", value: "BSc in Faculty of Engineering (CSED)." },
  {
    key: "",
    value:
      " Web and UI Development 9 Months Diploma, Information Technology Institute (ITI),Ismailia Branch.",
  },
];
const About = () => {
  return (
    <Box id="about">
      <Header title="About" subtitle="About me" />
      <Stack direction="row" spacing={{ md: 4 }} alignItems="center">
        <Box sx={{ width: "40%", display: { xs: "none", md: "block" } }}>
          <img src={aboutImage} alt="" />
        </Box>
        <Box>
          {data.map((myData) => {
            return (
              <Box key={myData.key} sx={{display: "flex", justifyContent: "center", flexDirection:{xs: "column",sm:"row"}}}>
                <Typography
                  key={myData.key}
                  variant="span"
                  component="span"
                  sx={{
                    textAlign: { xs: "left", md: "left" },
                    color: "#805b6d",
                    width: "20%",
                    fontWeight: "bold"
                  }}
                >
                  {myData.key}
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: "black", width: "60%" }}
                >
                  {myData.value}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
