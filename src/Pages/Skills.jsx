import { Box } from "@mui/material";
import Header from "../Components/Header";
import SkillCard from "../Components/SkillCard";

const skillsArr = [
  {
    name: "HTML5",
    imgSrc: "/html.svg",
  },
  {
    name: "CSS3",
    imgSrc: "/css.svg",
  },
  {
    name: "Javascript",
    imgSrc: "/js.svg",
  },
  {
    name: "Tailwind",
    imgSrc: "/tailwind.svg",
  },
  {
    name: "Material UI",
    imgSrc: "/mui.svg",
  },
  {
    name: "React",
    imgSrc: "/react.svg",
  },
  {
    name: "Angular",
    imgSrc: "/angular.svg",
  },
  {
    name: "Node",
    imgSrc: "/node.svg",
  },
  {
    name: "MongoDB",
    imgSrc: "/mongo.svg",
  },
];
const Skills = () => {
  return (
    <Box id="skills">
      <Header title="Skills" subtitle="My Skills"/>
      <Box sx={{display: "flex", justifyContent: "center", margin:"auto", gap: "10px", flexWrap: "wrap", width:{xs: "75%", md:"70%"}}}>
        {skillsArr.map((skill) => {
          return (
            <SkillCard
              key={skill.name}
              name={skill.name}
              imgSrc={skill.imgSrc}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
