import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";

const Footer = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      sx={{
        textAlign: "left",
        backgroundColor: "#111827",
        padding: "30px",
        color: "white",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemText
            primary="Links"
            sx={{
              "& .MuiListItemText-primary": {
                color: "#805b6d",
                fontWeight: "bold",
                fontSize: "20px",
              },
            }}
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home" sx={{ padding: 0 }}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#about" sx={{ padding: 0 }}>
            <ListItemText>About</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#skills" sx={{ padding: 0 }}>
            <ListItemText>Skills</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#contact" sx={{ padding: 0 }}>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemText
            sx={{
              "& .MuiListItemText-primary": {
                color: "#805b6d",
                fontWeight: "bold",
                fontSize: "20px",
              },
            }}
          >
            Skills
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Javascript</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>React</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Angular</ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText>Tailwind</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemText
            sx={{
              "& .MuiListItemText-primary": {
                color: "#805b6d",
                fontWeight: "bold",
                fontSize: "20px",
              },
            }}
          >
            Projects
          </ListItemText>
        </ListItem>
        <Stack display="flex" flexDirection="row" gap="10px">
          <Stack display="flex" flexDirection="column" gap="10px">
            <Box component="a" href="https://nadaelho.github.io/Speed-Typing/">
              <img src="/p5.png" width="100px" />
            </Box>
            <Box component="a" href="https://nadaelho.github.io/Flowers-Store/">
              <img src="/p2.png" width="100px" />
            </Box>
          </Stack>
          <Stack display="flex" flexDirection="column" gap="10px">
            <Box
              component="a"
              href="https://github.com/NadaElho/Memory-game-with-timer"
            >
              <img src="/p3.png" width="100px" />
            </Box>
            <Box
              component="a"
              href="https://github.com/NadaElho/Advice-generator"
            >
              <img src="/p4.png" width="100px" />
            </Box>
          </Stack>
        </Stack>
      </List>
    </Stack>
  );
};

export default Footer;
