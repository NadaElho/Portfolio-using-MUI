import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box sx={{ my: "32px" }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bolder",
          color: "#e7e9eb",
          fontSize: { sx: "75px", md: "100px" },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{
          textAlign: "center",
          mt: { xs: "-22px", md: "-55px" },
          color: "#805b6d",
          fontSize: { sx: "20px", md: "35px" },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
