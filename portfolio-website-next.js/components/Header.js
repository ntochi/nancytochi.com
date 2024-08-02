import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nancy | Front-End Software Developer</title>

        {/* Animation On Scroll */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        
        {/* TailwindCSS */}
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />

        {/* Custom styles */}
        <link rel="stylesheet" type="text/css" href="/app.css" />

        <style>
          {`
            .dropdown:hover .dropdown-menu {
              display: block;
            }
          `}
        </style>
        
        {/* Uncomment this if Alpine.js is needed */}
        {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script> */}
      </Head>

      <body className="bg-red-100 font-mono">
        {/* Navigation starts here */}
        <nav className="shadow md:py-1">
          <div className="relative mx-auto py-7 lg:px-14 md:py-5 flex justify-end md:items-center md:container">
            {/* Nancy italics menu */}
            <div className="absolute top-0 left-0 w-full lg:w-2/4">
              <svg viewBox="0 0 4000 3000">
                {/* <metadata>
                  <?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
                  <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39">
                    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                      <rdf:Description rdf:about="" />
                    </rdf:RDF>
                  </x:xmpmeta>
                </metadata> */}
              </svg>
            </div>
          </div>
        </nav>
        {/* Navigation ends here */}
      </body>
    </>
  );
};

export default Header;
