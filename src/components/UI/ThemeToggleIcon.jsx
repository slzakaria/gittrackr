import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { changeTheme } from "../../utils/changeTheme";

const ThemeToggleIcon = () => {
	const themeList = ["light", "dark"];
	const [currentTheme, setCurrentTheme] = useState("dark");

	const nextTheme = (current) => {
		if (current === "light") return "dark";
		if (current === "dark") return "light";
	};

	const nextThemeIcon = (current) => {
		if (current === "dark") return <FaSun />;
		if (current === "light") return <FaMoon />;
	};

	const handleClick = (current) => {
		const newTheme = nextTheme(current);
		changeTheme(newTheme);
		setCurrentTheme(newTheme);
	};

	return (
		<li
			onClick={() => handleClick(currentTheme)}
			className='hover:scale-125 cursor-pointer'>
			<a className='text-details hover:text-opposite'>{nextThemeIcon(currentTheme)}</a>
		</li>
	);
};

export default ThemeToggleIcon;
