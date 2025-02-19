function Navlinks() {
  return (
    <div className="absolute md:static w-full md:w-auto top-[80px] md:top-0 flex flex-col md:flex-row items-center gap-5 bg-white md:bg-transparent rounded-md py-6">
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
