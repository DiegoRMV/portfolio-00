import PropTypes from "prop-types";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import DarkMode from "./DarkMode";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: `${"< inicio />"}`,
		},
		{
			id: 2,
			link: `${"< sobre mi />"}`,
		},
		{
			id: 3,
			link: `${"< proyectos />"}`,
		},
	];

	return (
		<nav
			id="navbar"
			className="flex justify-between items-center align-middle w-full h-16 text-white bg-casiFondo px-4 dark:bg-light z-50"
		>
			<div>
				<ul className="hidden md:flex  items-center align-middle justify-center">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="dark:text-black font-fireCode text-white hover:text-demas font-semibold xl:text-[18px] lg:text-base md:text-xs px-3 cursor-pointer hover:scale-110 duration-200 tracking-tight"
						>
							<Link to={link} smooth duration={500}>
								{link}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="hidden md:flex  items-center align-middle justify-center">
				<DarkMode />
			</div>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 md:hidden "
			>
				{nav ? <FaTimes /> : <FaBars className="dark:text-black" />}
			</div>
			{nav ? (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
					{links.map(({ id, link }) => (
						<li key={id} className="px-4 cursor-pointer py-6 text-4xl ">
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
					<div className="flex flex-row gap-14 mt-6">
						<div>
							<DarkMode />
						</div>
					</div>
				</ul>
			) : null}
		</nav>
	);
};

Navbar.propTypes = {
	isEnglish: PropTypes.bool,
	onLanguageToggle: PropTypes.func,
};

export default Navbar;
