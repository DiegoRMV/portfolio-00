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
		<nav className="max-w-[1440px] w-full z-50 fixed top-0 right-0 left-0 mx-auto dark:bg-black dark:text-white flex justify-center bg-white">
			<div className="flex justify-between items-center align-middle w-full max-w-screen-xl h-16">
				<div>
					<ul className="hidden md:flex items-center align-middle justify-center">
						{links.map(({ id, link }) => (
							<li
								key={id}
								className="font-fireCode hover:text-violet-900 dark:hover:text-green1 font-semibold xl:text-[18px] lg:text-base text-sm px-3 cursor-pointer hover:scale-110 duration-200 tracking-tight"
								// hover:bg-nuevo hover:bg-clip-text hover:text-transparent
							>
								<Link to={link} smooth duration={500}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="hidden md:flex items-center align-middle justify-center">
					<DarkMode />
				</div>

				<div
					onClick={() => setNav(!nav)}
					className="cursor-pointer p-4 z-10 md:hidden text-3xl"
				>
					{nav ? <FaTimes /> : <FaBars />}
				</div>
				{nav ? (
					<ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark:bg-gray-950 bg-white">
						{links.map(({ id, link }) => (
							<li key={id} className="px-4 cursor-pointer py-6 text-3xl font-fireCode hover:text-green1">
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
						<div className="flex justify-center items-center">
							<DarkMode className=""/>
						</div>
					</ul>
				) : null}
			</div>
		</nav>
	);
};

export default Navbar;
