import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
export default function PortfolioCard({
  name,
  image,
  github,
  liveDemo,
  category,
}) {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: "space-between"}}>
        <Button size="small" variant="a" href={github}>
            <GitHubIcon color="primary"/>
        </Button>
        {liveDemo && <Button size="small" component="a" variant="contained" href={liveDemo}>
          Live Demo
        </Button>}
      </CardActions>
    </Card>
  );
}
