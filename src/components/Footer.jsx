import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import resume from "../assets/pdfs/Currículum-CormanKevin-2.pdf";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
	return (
		<>
			<section
				name="footer"
				className="w-full text-white  bg-otroFondo dark:bg-light"
			>
				<div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center items-center w-full ">
					<p className="text-lg font-fireCode py-6 text-nuevoWhite dark:text-black dark:font-semibold ">
						Gracias por llegar hasta aquí !!!, puedes descargar mi CV.
					</p>
					<a href={resume} download="Resume/CV KevinCorman">
						<button className=" font-fireCode font-bold text-base cursor-pointer text-nuevoWhite px-6 py-2 my-8 items-center rounded-md bg-nuevo3">
							Descargar CV
						</button>
					</a>
					<div className="flex flex-row justify-center gap-8 align-middle text-center items-center 2xl:hidden">
						<a
							href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
							className=" dark:text-black  text-white  cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin size="2rem" />
						</a>
						<a
							href="https://github.com/Laoset"
							className=" dark:text-black  text-white cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size="2rem" />
						</a>
						<a
								className="hover:rotate-6 duration-200"
								target="_blank"
								rel="noreferrer"
								href={`mailto:diegormver@gmail.com`}
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
					<div className="flex justify-center text-center pt-10">
						<h2 className="text-white text-sm text-center dark:text-black ">
							- Derechos Reservados 😎 DiegoRMV -
						</h2>
					</div>
				</div>
			</section>
		</>
	);
};

Footer.propTypes = {
	isEnglish: PropTypes.bool,
};

export default Footer;
