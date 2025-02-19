import HeaderText from "./HeaderText";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import OverLay from "./OverLay";

function Header() {
  return (
    <div className=" relative h-[60vh] lg:h-screen bg-center px-5 lg:px-[7rem]">
      <OverLay />

      <div className="relative z-10 flex flex-col gap-[6rem] md:gap-[8rem]">
        <div className="flex flex-row items-center justify-between pt-10">
          <Logo />
          <Navlinks />
        </div>

        <div>
          <HeaderText />
        </div>
      </div>
    </div>
  );
}

export default Header;
