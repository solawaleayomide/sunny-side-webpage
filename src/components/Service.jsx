import { serviceData } from "../data";

function Service() {
  return (
    <div className="md:flex">
      {serviceData.map((service) => {
        return (
          <div key={service.id} className="md:flex-1 relative">
            <div className="relative">
              <img src={service.desktopImg} />
            </div>

            <div className=" px-5 lg:px-[7rem] text-center flex flex-col gap-5 absolute top-[10.7rem] md:top-[13.5rem] lg:top-[22rem] z-10">
              <h1 className="font-fraunces font-bold text-2xl">
                {service.heading}
              </h1>
              <p className="font-barlow text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Service;
