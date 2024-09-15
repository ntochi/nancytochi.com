import Hero from "../components/homepage/Hero";
import Contact from "../components/homepage/Contact";
import Thanks from "../components/homepage/Thanks";
import Card from "../components/homepage/Card";
import AiutaConnectImage from "../public/aiutaconnect_homepage1.png"
import DiscoverNowImage from "../public/discovernow_hompage.png"
import KidsPlaceImage from "../public/kidsplace.png"
import AatcImage from "../public/aatcservices.png"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Hero />

      <p className="text-5xl font-bold"> Featured work</p>
      <div className="mt-8">
        <Card
          title="Aiuta Connect Mobile App" 
          imgSrc={AiutaConnectImage}
          imgAlt="Screenshot of Aiuta Connect's homepage"
          body="Social network application for senior citizens. Worked with a remote team of eight developers, collaborating on GitHub. Wrote code reviews, submitted pull requests, and pair programmed."
          technologies="React Native, TypeScript, Expo, TailwindCSS, Neon, PostgreSQL"
          liveLink="https://aiutaconnect.com/"
        />
        <Card
          title="Kids Place" 
          imgSrc={KidsPlaceImage}
          imgAlt="Screenshot of kidsplace homepage"
          body="Full-stack clothing store application that provides users the ability to select a product to purchase, view purchase information, and leave a product review. Incorporated user authorization and authentication for various app routes along with flash messages to handle error and success messages."
          technologies="JavaScript, Node.js, Express, MongoDB, Passport.js, TailwindCSS, deployed to Heroku"
          liveLink="https://kids-place.herokuapp.com/"
          repoLink="https://github.com/ntochi/kids-place" 
        />
        <Card
          title="DiscoverNow" 
          imgSrc={DiscoverNowImage}
          imgAlt="Screenshot of kidsplace homepage"
          body="Immersive and interactive learning platform that enables users to explore countries, languages, and cultures."
          technologies="Next.js, React, TypeScript, Storybook, TailwindCSS, Neon, PostgreSQL, deployed on AWS"
          liveLink="https://www.discovernow.xyz/"
        />

        <Card 
          title="AATC Services" 
          imgSrc={AatcImage}
          imgAlt="Screenshot aatcservices homepage"
          body="Website for a private consulting business. Redesigned website from a basic one-page HTML website to a user-friendly application utilizing call-to-actions, images and animations to increase user engagement.
          "
          technologies="Wordpress, PHP, MySQL"
          liveLink="https://aatcservices.com/"
        />
        </div>

      <Contact />
      <Thanks />
    </main>
  );
}
