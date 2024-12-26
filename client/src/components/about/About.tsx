import ProfileAsset from "../../assets/profile.webp";

function About() {
  return (
    <section
      id="#about"
      className="flex items-center justify-between gap-12 px-12 py-48"
    >
      {/* INTRO */}
      <article className="space-y-4">
        <h2 className="text-foreground text-4xl">Hi there!</h2>
        <h1 className="text-primary text-7xl font-medium">Andrew Holligan</h1>
        <h3 className="text-muted-foreground text-lg">
          3rd Year MSci Student | Aspiring Full-Stack Developer
        </h3>
      </article>

      {/* PICTURE */}
      <img
        src={ProfileAsset}
        alt="Profile Picture"
        className="border-primary h-96 w-96 rounded-full border-4 shadow-lg"
      />
    </section>
  );
}

export default About;
