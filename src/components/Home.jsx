import PropTypes from "prop-types";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { basics } from "../data/cv.json";

const Home = () => {
	const SOCIAL_ICONS = {
		github: <FaGithub size={30} />,
		linkedin: <FaLinkedin size={30} />,
		x: <FaXTwitter size={30} />,
	};
	const { name, title, label, profiles, image, email } = basics;
	return (
		<>
			<section name="< inicio />" className="dark:bg-light p-4">
				<div className="max-w-screen-xl mx-auto h-full pr-4 md:flex-row mt-16">
					<div className="flex flex-col justify-center h-full">
						<div className="flex-grow lg:flex justify-center items-center">
							<div className="flex justify-center item-center lg:w-1/3">
								<img
									className="rounded-full"
									src={image}
									alt={`foto de ${name}`}
									width={300}
									height={400}
								/>
							</div>

							<h2 className="font-oswald xl:pl-0 xl:text-[80px]  lg:text-[60px] sm:text-[40px] text-center  text-[20px] font-bold text-white dark:text-gray-900 ">
								{name.split(" ")[0]}, {title}
							</h2>
						</div>

						<div className="h-[2px] bg-white mt-4 dark:bg-black"></div>
						<div className="flex justify-center items-center">
							<span className="text-base md:text-lg xl:text-xl font-fireCode text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold ">
								<Typewriter
									options={{
										strings: label,
										autoStart: true,
										loop: true,
									}}
								/>
							</span>
						</div>
						<div className="2xl:hidden flex flex-row text-white dark:text-black justify-center gap-10 py-4">
							{profiles.map(({ network, url }) => {
								const icon = SOCIAL_ICONS[network.toLowerCase()];
								return (
									<a
										className="hover:rotate-6 duration-200"
										key={network}
										href={url}
										title={`Visitar el perfil de ${name} en ${network}`}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={network}
									>
										{icon}
									</a>
								);
							})}
							<a
								className="hover:rotate-6 duration-200"
								target="_blank"
								rel="noreferrer"
								href={`mailto:${email}`}
								aria-label="mail"
							>
								<TfiEmail size={30} />
							</a>
							<a
								href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
								className=" dark:text-black  text-white  cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
								target="_blank"
								rel="noreferrer"
							>
								<FaFilePdf size="2rem" />
							</a>
						</div>
						<div className="flex justify-center items-center ">
							<Link
								to="< proyectos />"
								smooth
								duration={500}
								className="font-fireCode group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold  bg-nuevo3 hover:scale-110 duration-200 cursor-pointer"
							>
								Proyectos
								<span className="group-hover:rotate-90 duration-300 pl-1">
									<MdDoubleArrow size={20} />
								</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

Home.propTypes = {
	isEnglish: PropTypes.bool,
};

export default Home;
