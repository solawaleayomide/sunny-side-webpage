function Footer() {
  return (
    <div className="bg-primary-moderateCyan py-10 text-center">
      <div className="flex flex-col gap-10">
        <h1 className="font-barlow font-bold text-2xl text-primary-cyan">
          sunnyside
        </h1>

        <div className=" flex gap-6 justify-center font-semibold text-primary-cyan text-center">
          <span>About</span>
          <span>Service</span>
          <span>Projects</span>
        </div>

        <div className="flex flex-row gap-8 justify-center">
          <img src="/assets/icon-facebook.svg" alt="" />
          <img src="/assets/icon-instagram.svg" alt="" />
          <img src="/assets/icon-pinterest.svg" alt="" />
          <img src="/assets/icon-twitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
