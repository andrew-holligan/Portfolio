import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="border-border flex items-center justify-between border-b-4 px-12 py-4">
      {/* NAME */}
      <a href="/" className="text-foreground text-2xl font-medium">
        Andrew Holligan
      </a>

      <ul className="flex gap-8">
        {/* LINKS */}
        <li>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#journey"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Journey
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="CV.pdf"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            CV
          </a>
        </li>

        {/* THEME TOGGLE */}
        <ThemeToggle className="text-muted-foreground hover:text-foreground transition-colors" />
      </ul>
    </nav>
  );
}

export default Navbar;
