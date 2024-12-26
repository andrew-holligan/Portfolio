import { useState } from "react";
import { Menu, X } from "lucide-react";

function SmallScreenLinks({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSetIsOpen = () => setIsOpen(true);
  const handleSetIsClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleSetIsOpen} className={className}>
        <Menu />
      </button>

      {isOpen && (
        <div className="fixed left-0 top-0 h-screen w-screen bg-background">
          <nav className="flex h-16 items-center justify-end border-b-4 border-border px-12">
            <button onClick={handleSetIsClose} className={className}>
              <X />
            </button>
          </nav>

          <ul className="flex h-[calc(100vh-68px)] flex-col items-center justify-center gap-8">
            <li>
              <a
                href="#about"
                onClick={handleSetIsClose}
                className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleSetIsClose}
                className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#journey"
                onClick={handleSetIsClose}
                className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Journey
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleSetIsClose}
                className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="CV.pdf"
                onClick={handleSetIsClose}
                className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default SmallScreenLinks;
