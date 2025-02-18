function Navlinks() {
  return (
    <div className="hidden md:flex flex-row items-center gap-5">
      <ul className="flex flex-row gap-5 text-white font-semibold font-barlow ">
        <a
          href="/"
          className="py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 "
        >
          About{" "}
        </a>
        <a
          href="/"
          className="py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 "
        >
          Services{" "}
        </a>
        <a
          href="/"
          className="py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 "
        >
          Projects{" "}
        </a>
      </ul>

      <button className="font-fraunces text-black bg-white py-2 px-5 rounded-full hover:bg-white hover:bg-opacity-30 hover:text-white">
        CONTACT
      </button>
    </div>
  );
}

export default Navlinks;
