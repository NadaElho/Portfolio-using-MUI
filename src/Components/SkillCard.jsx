import { Box, Typography } from "@mui/material";
const SkillCard = ({name, imgSrc}) => {
  return (
    <>
      <Box width="200px" sx={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#e7e9eb", padding: "5px", borderRadius: "5px"}}>
        <Box width="100px">
          <img src={imgSrc} width="40px" alt=""/>
        </Box>
        <Typography sx={{ fontWeight: "bold"}}>
            {name}
        </Typography>
      </Box>
    </>
  );
};

export default SkillCard;
