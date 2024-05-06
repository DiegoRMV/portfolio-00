import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const DarkMode = ({ className = "" }) => {
	// MODO OSCURO!
	const [theme, setTheme] = useState(document.documentElement.classList.value);
	console.log(theme);

	// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	//   document.documentElement.classList.add('dark')
	// } else {
	//   document.documentElement.classList.remove('dark')
	// }

	// // Whenever the user explicitly chooses light mode
	// localStorage.theme = 'light'

	// // Whenever the user explicitly chooses dark mode
	// localStorage.theme = 'dark'

	// // Whenever the user explicitly chooses to respect the OS preference
	// localStorage.removeItem('theme')
	// MODO OSCURO!
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);
	// MODO OSCURO!
	const handleTheme = () => {
		setTheme(theme === "dark" ? "" : "dark");
	};
	return (
		<button
			onClick={handleTheme}
			className={`rounded-md cursor-pointer text-[24px] lg:text-[28px] hover:scale-[1.25] duration-300 tracking-tight hover:text-violet-900 dark:hover:text-green1 p-4 ${className}`}
			aria-label="darkMode"
		>
			{theme === "dark" ? <BsSun /> : <MdDarkMode />}
		</button>
	);
};

DarkMode.propTypes = {
	className: PropTypes.string,
};

export default DarkMode;
