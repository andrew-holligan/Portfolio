function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 px-12 py-4">
      {/* NAME */}
      <h1 className="text-2xl font-medium">Andrew Holligan</h1>

      {/* NAVIGATION LINKS */}
      <ul className="flex gap-8">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#journey">Journey</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="CV.pdf">CV</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
