import Logo from "./Logo";

import "./component.style.css";

const Header = () => {
  return (
    <header className="header">
      <Logo
        style={{ width: "139px", height: "25px" }}
        src={"./Logo/logotype.png"}
      />
    </header>
  );
};

export default Header;
