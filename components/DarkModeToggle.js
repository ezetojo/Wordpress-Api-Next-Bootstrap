import React from "react";
import Icon from "../components/Icon.js";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);
  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={darkMode.toggle}>
        <Icon
          icon={darkMode.value ? "sun.svg" : "moon.svg"}
          className="align-unset"
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
