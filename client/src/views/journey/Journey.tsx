import Heading from "../../components/heading/Heading";
import Timeline from "./Timeline";

function Journey() {
  return (
    <section id="journey" className="my-32 flex flex-col gap-12 px-12 py-24">
      <Heading title={"Journey"} />
      <Timeline />
    </section>
  );
}

export default Journey;
