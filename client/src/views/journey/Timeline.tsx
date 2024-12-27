import TennentsioAsset from "../../assets/journey/tennentsio.png";

import TimelineWrapper from "./TimelineWrapper";
import TimelineItem from "./TimelineItem";

function Timeline() {
  const items = [
    {
      title: "Software Engineer @ Glasgow University Software Service",
      subtitle: "10/2024 - Present",
      content: [
        "Implemented continuous development pipeline with GitLab CI/CD on DigitalOcean droplets",
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
      content: ["Teaching Python/HTML/CSS/JavaScript to pupils"],
    },
  ];

  return (
    <TimelineWrapper>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          content={item.content}
          reverse={index % 2 === 0}
        />
      ))}
    </TimelineWrapper>
  );
}

export default Timeline;
