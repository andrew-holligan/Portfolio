import TennentsioAsset from "../../assets/journey/tennentsio.png";

import TimelineWrapper from "./TimelineWrapper";
import TimelineItem from "./TimelineItem";

function Timeline() {
  const items = [
    {
      title: "Software Engineer @ Glasgow University Software Service",
      subtitle: "10/2024 - Present",
      content: [
        "Implemented continuous development pipeline with GitLab CI/CD on DigitalOcean Ubuntu droplets",
        "Sole developer for a digital tool project structuring investment decisions, responsible for full-stack development using Django",
      ],
    },
    {
      title: "DYHTG Hackathon",
      subtitle: "10/2024",
      image: TennentsioAsset,
      content: [
        "Developed backend for online multiplayer web game using Colyseus.js for lobby management and Matter.js for physics simulation",
        "Team came runners-up in challenge",
      ],
    },
    {
      title: "DYHTG Hackathon",
      subtitle: "10/2023",
      content: [
        "Conducted data analysis on csv datasets using Python and MatPlotLib",
      ],
    },
    {
      title: "Code Olympics",
      subtitle: "02/2023",
      content: ["Solved a variety of bite-sized algorithmic coding challenges"],
    },
    {
      title: "Coding Tutor @ Code Cadets",
      subtitle: "01/2023 - Present",
      content: [
        "Teaching Python, HTML, CSS, and JavaScript to young learners, simplifying concepts for better understanding",
      ],
    },
    {
      title: "MSci Computing Science @ University of Glasgow",
      subtitle: "09/2022 - 05/2027 (Expected)",
      content: ["Started degree in Computing Science"],
    },
  ];

  return (
    <TimelineWrapper>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} reverse={index % 2 === 0} />
      ))}
    </TimelineWrapper>
  );
}

export default Timeline;
