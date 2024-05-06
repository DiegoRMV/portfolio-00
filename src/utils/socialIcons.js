import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export const SocialIcons = () => {
	return {
		github: <FaGithub size={30} />,
		linkedin: <FaLinkedin size={30} />,
		email: <TfiEmail size={30} />,
		x: <FaXTwitter size={30} />,
	};
};
