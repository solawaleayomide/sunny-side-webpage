import { useState } from "react";
import HeaderText from "./HeaderText";
import { Hamburger, Logo } from "./Logo";
import Navlinks from "./Navlinks";
import OverLay from "./OverLay";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" relative h-[60vh] lg:h-screen bg-center px-5 lg:px-[7rem]">
      <OverLay />

      <div className="relative  z-10 flex flex-col gap-[6rem] md:gap-[9rem]">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:items-center md:justify-between pt-10">
          <div className="flex flex-row justify-between">
            <Logo />

            <Hamburger toggle={toggle} setToggle={setToggle} />
          </div>

          <div>{toggle && <Navlinks />}</div>
        </div>

        <div>
          <HeaderText />
        </div>
      </div>
    </div>
  );
}

export default Header;
