import PropTypes from "prop-types";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import resume from "/pdfs/cvformal-diegoDev.pdf";

const ArticleSocial = ({ profiles = [] }) => {
	const socialIcons = {
		github: <FaGithub />,
		linkedin: <FaLinkedin />,
		email: <TfiEmail />,
		x: <FaXTwitter />,
	};

	return (
		<article className="flex justify-center gap-8 align-middle text-center items-center 2xl:hidden">
			{profiles.map(({ network, url }) => {
				return network === "email" ? (
					<a
						className="hover:rotate-6 duration-200 dark:hover:text-green1 transition-all hover:opacity-75 text-2xl md:text-3xl"
						key={url}
						href={`mailto:${url}`}
						title={`Puedes enviarme un correo a ${network}`}
						target="_blank"
						rel="noreferrer"
						aria-label="email"
					>
						{socialIcons.email}
					</a>
				) : (
					<a
						className="hover:rotate-6 duration-200 dark:hover:text-green1 transition-all hover:opacity-75 text-2xl md:text-3xl"
						key={network}
						href={url}
						title={`Visitar el perfil de ${name} en ${network}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={network}
					>
						{socialIcons[network.toLowerCase()]}
					</a>
				);
			})}
			<a
				href={resume}
				download={"Diego/Menchaca/CV"}
				className="cursor-pointer hover:rotate-6 duration-200 hover:opacity-75 dark:hover:text-green1 transition-all text-2xl md:text-3xl"
				target="_blank"
				rel="noreferrer"
			>
				<FaFilePdf />
			</a>
		</article>
	);
};

ArticleSocial.propTypes = {
	profiles: PropTypes.array,
};

export default ArticleSocial;
