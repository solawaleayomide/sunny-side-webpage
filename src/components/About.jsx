import { aboutData } from "../data";

function About() {
  return (
    <div>
      {aboutData.map((details) => {
        return (
          <div key={details.id} className="md:flex even:flex-row-reverse">
            <div className="flex-1 flex items-center">
              <div className="px-5 py-5 md:py-0 lg:px-[7rem] flex flex-col gap-2 justify-center my-auto text-center md:text-start ">
                <h2 className="font-fraunces font-bold text-2xl ">
                  {details.heading}
                </h2>
                <p className="font-barlow">{details.description}</p>
                <span className="uppercase font-fraunces cursor-pointer text-sm">
                  Learn more
                </span>
              </div>
            </div>

            <div className="hidden md:block md:flex-1">
              <img src={details.desktopImg} />
            </div>

            <div className="md:hidden">
              <img src={details.mobileImg} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About;
