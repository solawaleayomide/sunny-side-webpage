export function Logo() {
  return (
    <div>
      <img src="/assets/logo.svg" alt="logo" />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export function Hamburger({ toggle, setToggle }) {
  return (
    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
      <img src="/assets/icon-hamburger.svg" alt="hamburger" />
    </div>
  );
}
