import PropTypes from "prop-types";
import { basics } from "../data/cv.json";

const About = () => {
	const { name, summary } = basics;
	return (
		<>
			<section
				name="< sobre mi />"
				className="w-full bg-fondito2 text-white dark:bg-light pt-20"
			>
				<div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full gap-6">
					<div className="pb-8">
						<h2 className="font-oswald text-5xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
							{"< Sobre mí />"}
						</h2>
					</div>
					<p className="font-fireCode text-xl text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold ">
						👋¡Bienvenid@s! Mi nombre es {name}, {summary}
					</p>
					<p className="font-fireCode text-xl text-gray-300 pb-6 mx-m-md dark:text-black dark:font-semibold">
						Estas son las principales tecnologías que utilizo:
					</p>
					<div className="flex lg:flex-row justify-around flex-col">
						<div className="xl:flex xl:flex-row gap-4 grid grid-cols-3">
							<img
								className="w-16"
								src="https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor"
								alt="logo html5"
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"
								alt="logo css"
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
								alt="logo javascript"
							/>

							<img
								className="w-16"
								src="https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff"
								alt="logo typescript"
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/react-original.svg?size=128&color=ffffff"
								alt="logo react"
							/>
							<img
								className="w-16 bg-white rounded-full p-[2px]"
								src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
								alt="logo nextjs"
							/>
						</div>
						<div className="xl:flex xl:flex-row gap-4 grid grid-cols-3">
							<img
								className="w-16"
								src="https://www.svgrepo.com/show/374118/tailwind.svg"
								alt="logo tailwind"
							/>

							<img
								className="w-16 bg-white rounded-xl px-1"
								src="https://icongr.am/devicon/express-original.svg?size=128&color=currentColor"
								alt="logo express"
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=ffffff"
								alt="logo nodejs"
							/>

							<img
								className="w-16"
								src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=ffffff"
								alt="logo postgresql"
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/git-original.svg?size=128&color=currentColor"
								alt="logo git"
							/>

							<img
								className="w-16 bg-white rounded-full"
								src="https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
								alt="logo github"
							/>
						</div>
					</div>
					{/* <p className="font-fireCode text-xl text-gray-300 pb-6 mx-m-md dark:text-black dark:font-semibold mt-10">
						Otras tecnologías:
					</p>
					<div className="flex lg:flex-row justify-around flex-col">
						<div className="xl:flex xl:flex-row gap-4 grid grid-cols-3">
							<img
								className="w-16"
								src="https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/c-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/java-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/linux-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/php-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-16"
								src="https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor"
								alt=""
							/>
							<img
								className="w-18"
								src="https://icongr.am/devicon/django-plain.svg?size=80&color=41c882

								"
								alt=""
							/>
						</div>
					</div> */}
				</div>
			</section>
		</>
	);
};

About.propTypes = {
	isEnglish: PropTypes.bool,
};

export default About;
