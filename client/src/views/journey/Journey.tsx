import Timeline from "./Timeline";

function Journey() {
  return (
    <section id="journey" className="my-32 flex flex-col gap-12 px-12 py-24">
      {/* HEADING */}
      <h2 className="w-fit border-b-4 border-border p-2 text-4xl text-foreground max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
        Journey
      </h2>

      {/* JOURNEY */}
      <Timeline />
    </section>
  );
}

export default Journey;
