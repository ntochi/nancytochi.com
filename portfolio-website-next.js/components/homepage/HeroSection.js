const HeroSection = () => (
  <section id="hero" className="h-auto text-center">
    <div>
      <div className="animate greeting">Hey there,</div>
      <div className="animate">
        <span className="name-1">I'm Nancy</span>
      </div>
      <div className="title mt-1 md:mt-0" data-aos="fade-down">
        Software Developer 
        <div className="mt-1">
          <svg
            className="inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 30"
            width="24"
            height="30"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
              fill="rgba(231,76,60,1)"
            />
          </svg>
          <p className="inline">New York</p>
        </div>

        Github | Linkedin

      </div>

      {/* Down arrow */}
      <div className="mt-28">
        <svg
          className="animate-bounce w-6 h-6 block m-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </section>
);

export default HeroSection;
