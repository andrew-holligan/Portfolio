import TennentsioAsset from "../../assets/journey/tennentsio.png";
import WhotookmytennentsAsset from "../../assets/journey/whotookmytennents.png";

import TimelineWrapper from "./TimelineWrapper";
import TimelineItem from "./TimelineItem";

function Timeline() {
  const items = [
    {
      title: "Duck Sauce Jam",
      subtitle: "02/2025",
      image: WhotookmytennentsAsset,
      content: [
        "Developed an online multiplayer web game using a custom Entity Component System",
      ],
    },
    {
      title: "Software Engineer @ Glasgow University Software Service",
      subtitle: "10/2024 - 05/2025",
      content: [
        "Led initial development of a policy comparison tool, responsible for full-stack development using Django",
        "Implemented the continuous development pipeline for the tool with GitLab CI/CD on DigitalOcean Ubuntu droplets, aiding future development",
        "Used Cloudflare D1, Workflows, and Workers AI to develop a distributed scraper with two independent workflows for site crawling and data extraction",
      ],
    },
    {
      title: "DYHTG Hackathon",
      subtitle: "10/2024",
      image: TennentsioAsset,
      content: [
        "Developed backend for online multiplayer web game using Colyseus.js for lobby management and Matter.js for physics simulation",
        "Team secured runner-up position for the challenge",
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
        "Led code-along sessions for a simple JavaScript clicker game, fostering a fun and engaging learning experience",
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
