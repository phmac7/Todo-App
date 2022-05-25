import React from "react";
import Title from "../../atoms/Title/Title";
import ToggleTheme from "../../atoms/ToggleTheme/ToggleTheme";

function Header() {
  return (
    <div>
      <Title />
      <ToggleTheme />
    </div>
  );
}

export default Header;
