import { testimonialData } from "../data";

function Testimonial() {
  return (
    <div className="flex flex-col gap-20 py-[7rem]">
      <h1 className="uppercase font-fraunces text-2xl tracking-[.5rem] text-center">
        client testimonial
      </h1>

      <div className="px-5 lg:px-[7rem] flex flex-col md:flex-row gap-16 md:gap-5">
        {testimonialData.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="flex flex-col gap-7 px-5 items-center text-center"
            >
              <div>
                <img
                  src={testimonial.avatar}
                  alt="avatar"
                  className="rounded-full"
                />
              </div>

              <p className="font-barlow">{testimonial.comment}</p>

              <div className="flex flex-col">
                <span className="font-fraunces">{testimonial.name}</span>
                <span className="font-barlow">{testimonial.designation}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
