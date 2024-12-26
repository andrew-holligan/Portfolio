import ThemeToggle from "./ThemeToggle";
import SmallScreenLinks from "./SmallScreenLinks";

function Navbar() {
  return (
    <nav className="sticky top-0 flex h-16 items-center justify-between border-b-4 border-border px-12">
      {/* NAME */}
      <a href="/" className="text-lg font-semibold text-foreground">
        Andrew Holligan
      </a>

      <div className="flex items-center gap-8">
        {/* LINKS */}
        <ul className="flex gap-8 max-md:hidden">
          <li>
            <a
              href="#about"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#journey"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Journey
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="CV.pdf"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              CV
            </a>
          </li>
        </ul>

        <ThemeToggle className="text-muted-foreground transition-colors hover:text-foreground" />

        <SmallScreenLinks className="text-muted-foreground transition-colors hover:text-foreground md:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
