function Footer() {
  return (
    <footer className="flex min-h-16 items-center border-t-4 border-border px-12 py-4">
      <p className="text-muted-foreground">
        Built with love by Andrew. This website's source code can be located{" "}
        <a
          href="https://github.com/andrew-holligan/Portfolio"
          className="font-medium text-secondary-foreground transition-colors hover:text-secondary"
        >
          here
        </a>
      </p>
    </footer>
  );
}

export default Footer;
