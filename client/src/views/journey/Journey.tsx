import HeadingUnderline from "../../components/navbar/HeadingUnderline";
import Timeline from "./Timeline";

function Journey() {
  return (
    <section id="journey" className="my-32 flex flex-col gap-12 px-12 py-24">
      {/* HEADING */}
      <header className="space-y-2">
        <h2 className="p-2 text-4xl text-foreground max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
          Journey
        </h2>
        <HeadingUnderline />
      </header>

      {/* JOURNEY */}
      <Timeline />
    </section>
  );
}

export default Journey;
