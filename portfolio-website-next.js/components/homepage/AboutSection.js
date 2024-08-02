const AboutSection = () => (
  <section id="about" className="h-auto mt-40 pt-10 pb-20 md:pt-20">
    <h1 className="font-extrabold text-3xl md:text-5xl text-center hover:text-red-400">
      A bit about me.
    </h1>
    <div className="px-10 md:px-12 pt-10 text-justify">
      <div className="max-w-4xl mx-auto text-md">
        <p className="text-xl md:text-2xl">
          I'm a front-end web developer. I enjoy creating things on the web. I
          regularly design & build small to medium-scale applications for
          clients ranging from individuals to small businesses. My goal is to
          always build products that provide smooth user experiences.
        </p>
        <p className="mt-3 text-xl md:text-2xl">
          I use technologies such as HTML & (S)CSS, TailwindCSS, JavaScript,
          React, NodeJS, MongoDB, and WordPress in my web applications.
        </p>
        <p className="mt-3 text-xl md:text-2xl">
          When I am not learning new technologies, I spend my time volunteering
          at my local church or catching up on my{" "}
          <a
            className="underline hover:underline hover:text-red-400"
            href="/blog"
          >
            latest read
          </a>
          .
        </p>
        <p className="mt-3 text-xl md:text-2xl">
          I have found a fulfilling creative path through coding. I’m grateful
          that I am in a field where one of the major requirements for staying
          relevant is to keep learning.
        </p>
        <p className="mt-3 text-xl md:text-2xl">Cheers to that! 🥂</p>
      </div>
    </div>
  </section>
);

export default AboutSection;
