function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        form.reset();
        alert("Thank you for reaching out!");
      })
      .catch((error) => {
        console.error(error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <form
      id="contact"
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* HONEYPOT */}
      <input name="bot-field" className="hidden" />

      {/* NAME */}
      <div>
        <label
          htmlFor="name"
          className="ml-2 block text-lg font-semibold text-primary"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="given-name"
          placeholder="name"
          required
          className="w-full rounded-lg border-4 border-border bg-card p-2 text-card-foreground placeholder-inherit focus:border-primary"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="ml-2 block text-lg font-semibold text-primary"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="email@email.com"
          required
          className="w-full rounded-lg border-4 border-border bg-card p-2 text-card-foreground placeholder-inherit focus:border-primary"
        />
      </div>

      {/* SUBJECT */}
      <div>
        <label
          htmlFor="subject"
          className="ml-2 block text-lg font-semibold text-primary"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          autoComplete="off"
          placeholder="subject"
          required
          className="w-full rounded-lg border-4 border-border bg-card p-2 text-card-foreground placeholder-inherit focus:border-primary"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="message"
          className="ml-2 block text-lg font-semibold text-primary"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          autoComplete="off"
          placeholder="message"
          rows={10}
          required
          className="w-full rounded-lg border-4 border-border bg-card p-2 text-card-foreground placeholder-inherit focus:border-primary"
        />
      </div>

      {/* SUBMIT */}
      <div className="flex w-full justify-end">
        <button
          type="submit"
          className="rounded-full bg-primary px-4 py-1 text-primary-foreground"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
