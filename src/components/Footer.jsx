import resume from "/pdfs/diegormv-cv.pdf";
import Data from "../data/data.json";
import ArticleSocial from "./ArticleSocial";
import Button from "./Button";

const Footer = () => {
	const { profiles } = Data;
	return (
		<section
			name="footer"
			className="w-full dark:text-white dark:bg-black bg-white"
		>
			<div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center items-center w-full ">
				<p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-300 mx-m-md text-center py-3">
					Gracias por llegar hasta aquí !!!, puedes descargar mi CV.
				</p>
				<div className="py-3 flex">
					<Button href={resume} title="Descargar CV" download={"Diego/Menchaca/CV"} />
				</div>
				<div className="py-3">
					<ArticleSocial profiles={profiles} />
				</div>
				<div className="flex justify-center text-center py-3">
					<h2 className="text-xs md:text-sm text-center font-mono">
						- Derechos Reservados 😎 DiegoRMV -
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Footer;
