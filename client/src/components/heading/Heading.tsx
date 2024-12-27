import HeadingUnderline from "./HeadingUnderline";

function Heading({ title }: { title: string }) {
  return (
    <header className="space-y-2">
      <h2 className="p-2 text-4xl text-foreground max-xl:text-3xl max-md:text-2xl max-sm:text-xl">
        {title}
      </h2>
      <HeadingUnderline />
    </header>
  );
}

export default Heading;
