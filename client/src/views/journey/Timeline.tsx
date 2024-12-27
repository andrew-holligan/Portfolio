import TimelineWrapper from "./TimelineWrapper";
import TimelineItem from "./TimelineItem";

function Timeline() {
  const items = [
    {
      title: "Title",
      content: ["Content 1", "Content 2"],
    },
    {
      title: "Title",
      content: ["Content 1", "Content 2"],
    },
  ];

  return (
    <TimelineWrapper>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          content={item.content}
          reverse={index % 2 === 0}
        />
      ))}
    </TimelineWrapper>
  );
}

export default Timeline;
