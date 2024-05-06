import PropTypes from "prop-types";

const Button = ({ title, href, download = "" }) => {
	return download !== "" ? (
		<a
			href={href}
			download={download}
			className="font-fireCode min-w-28 font-bold text-base cursor-pointer items-center rounded-md hover:scale-110 duration-200 bg-nuevo dark:bg-greengd1 text-white px-4 py-1 md:px-6 md:py-2"
		>
			{title}
		</a>
	) : (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="font-fireCode text-sm w-24 md:w-28 font-bold md:text-base cursor-pointer px-4 py-1 md:px-6 md:py-2 items-center rounded-md border-2 border-slate-950 dark:border-emerald-600 dark:bg-emerald-600 bg-slate-950 text-white hover:bg-white hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-colors "
		>
			{title}
		</a>
	);
};

Button.propTypes = {
	title: PropTypes.string,
	href: PropTypes.string,
	download: PropTypes.string,
};

export default Button;
