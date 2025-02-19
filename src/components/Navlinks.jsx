function Navlinks() {
  return (
    <div className="absolute w-full top-[80px] flex flex-col md:flex-row items-center gap-5 bg-white rounded-md py-6">
      <ul className="flex flex-col md:flex-row gap-5 text-primary-cyan text-center md:text-white font-semibold font-barlow ">
        <a
          href="/"
          className="py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 "
        >
          About
        </a>
        <a
          href="/"
          className="py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 "
        >
          Services
        </a>
        <a
          href="/"
          className="py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 "
        >
          Projects
        </a>
      </ul>

      <button className="font-fraunces text-black bg-primary-yellow md:bg-white py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 hover:text-white">
        CONTACT
      </button>
    </div>
  );
}

export default Navlinks;
