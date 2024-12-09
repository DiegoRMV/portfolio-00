import PropTypes from "prop-types";

const Title = ({ title="" }) => {
	return (
		<h2 className="font-oswald text-4xl md:text-start md:text-5xl font-extrabold inline border-b-4 bg-nuevo bg-clip-text border-gray-600 dark:border-white text-gray-900 dark:text-white">
			{title}
		</h2>
	);
};

Title.propTypes = {
	title: PropTypes.string,
};

export default Title;
