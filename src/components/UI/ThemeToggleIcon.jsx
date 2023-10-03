import { useState } from "react";
import { FaMoon, FaSun, FaDisplay } from "react-icons/fa6";
import { changeTheme } from "../../utils/changeTheme";

const ThemeToggleIcon = () => {
  const themeList = ["default", "light", "dark"]
  const [currentTheme, setCurrentTheme] = useState("default");

  const nextTheme = (current) => {
    if(current === 'default') return 'light'
    if(current === 'light') return 'dark'
    if(current === 'dark') return 'default'
  }

  const nextThemeIcon = (current) => {
    if(current === 'default') return <FaSun />
    if(current === 'light') return <FaMoon /> 
    if(current === 'dark') return <FaDisplay/>
  }

  const handleClick = (current) => {
    const newTheme = nextTheme(current)
    changeTheme(newTheme);
    setCurrentTheme(newTheme);
  }

  return (
    <li
      onClick={(() => handleClick(currentTheme))}
      className="hover:scale-125 cursor-pointer">
      <a className="text-details hover:text-opposite">
        {nextThemeIcon(currentTheme)}
      </a>
    </li>
  );
};

export default ThemeToggleIcon;
