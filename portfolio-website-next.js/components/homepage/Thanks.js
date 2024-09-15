import Image from "next/image";
import NancyPicture from "../../public/picture_of_Nancy.jpg"

const ThanksSection = () => (
  <section >
    <div className="flex flex-wrap-reverse lg:flex-wrap justify-center mx-auto pb-10">
      <div className="lg:w-2/5 flex items-center pt-10 md:pt-0">
        <div className="max-w-sm mx-auto border border-red-700">

          <Image 
            src={NancyPicture}
            alt="Picture of Nancy at Brooklyn Bridge, New York"
          />
        </div>
      </div>
      <div className="lg:w-2/5 md:flex my-auto ">
        <div className="px-4 text-center text-2xl md:text-3xl lg:text-5xl">
          Thank you for visiting! ❤️
        </div>
      </div>
    </div>
  </section>
);

export default ThanksSection;
