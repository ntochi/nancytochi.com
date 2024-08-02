const ContactSection = () => (
  <section id="contact" className="md:h-auto pb-12 md:py-28 text-center shadow">
    <h1 className="font-extrabold text-3xl md:text-5xl hover:text-red-400">
      Get in touch.
    </h1>
    <div className="px-8 pt-10">
      <div className="max-w-4xl mx-auto text-md">
        <p className="text-xl md:text-2xl md:leading-10">
          Want me to work on your project or your team? My inbox is always open
          whether it's for a potential client, a recruiter or to simply say hi.
        </p>
        <p className="mt-12 text-xl md:text-2xl">
          <a
            href="mailto: nancytochi24@gmail.com"
            className="hover:underline hover:text-red-400"
          >
            Email
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/ntochi"
            className="hover:underline hover:text-red-400"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/nancyonukogu/"
            className="hover:underline hover:text-red-400"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
