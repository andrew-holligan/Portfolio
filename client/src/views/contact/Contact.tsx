import { Mail, Github, Linkedin } from "lucide-react";

import Heading from "../../components/heading/Heading";

function Contact() {
  return (
    <section id="contact" className="my-32 flex flex-col gap-12 px-12 py-24">
      <div className="space-y-8 rounded-2xl bg-secondary p-4">
        <Heading title={"Contact"} />

        <ul className="flex flex-wrap gap-8 p-2">
          <li>
            <a
              href="mailto:andrew@andrewholligan.co.uk"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/andrew-holligan"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={32} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/andrewholligan"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin size={32} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
