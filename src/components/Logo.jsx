// eslint-disable-next-line react/prop-types
export default function LogoLink({ toggle, setToggle }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <Logo />
      <Hamburger toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <img src="/assets/logo.svg" alt="logo" />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Hamburger({ toggle, setToggle }) {
  return (
    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
      <img src="/assets/icon-hamburger.svg" alt="hamburger" />
    </div>
  );
}
