import ProfileAsset from "../../assets/profile.webp";

function About() {
  return (
    <section
      id="#about"
      className="flex h-[calc(100vh-136px)] items-center justify-between gap-12 px-12 max-md:flex-col max-md:justify-center"
    >
      {/* INTRO */}
      <article className="space-y-4">
        <h2 className="text-4xl text-foreground max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
          Hi there!
        </h2>
        <h1 className="text-7xl font-medium text-primary max-xl:text-6xl max-md:text-5xl max-sm:text-4xl">
          Andrew Holligan
        </h1>
        <h3 className="text-lg text-muted-foreground max-xl:text-base max-md:text-sm">
          3rd Year MSci Student | Aspiring Full-Stack Developer
        </h3>
      </article>

      {/* PICTURE */}
      <img
        src={ProfileAsset}
        alt="Profile Picture"
        className="w-96 rounded-full border-4 border-border p-2 shadow-lg max-xl:w-80 max-md:w-64"
      />
    </section>
  );
}

export default About;
