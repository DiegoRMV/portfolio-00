import Data from "../data/data.json";
import Title from "../components/Title";

const About = () => {
	const { name, summary } = Data.basics;
	const { main, others } = Data.skills;

	return (
		<section
			name="< sobre mi />"
			className="w-full dark:bg-fondito2 bg-light0 text-white px-4 pt-24 md:py-12 "
		>
			<div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full gap-6">
				<div className="mb-0 md:mb-8 flex justify-center md:inline">
					<Title title="< Sobre mí />" />
				</div>
				<p className="font-fireCode text-base md:text-xl dark:text-gray-300 py-4 text-black">
					👋¡Bienvenid@s! Mi nombre es {name}, {summary}
				</p>
				<p className="font-fireCode text-base md:text-xl dark:text-gray-300 pb-6 mx-m-md text-black">
					Estas son las principales tecnologías que utilizo:
				</p>
				<div className="flex lg:flex-row justify-around flex-col gap-4">
					<div className="xl:flex xl:flex-row gap-4 grid grid-cols-3 justify-items-center">
						{main.map((skill, indice) => {
							if (indice <= 5)
								return (
									<img
										key={skill.name}
										className="w-10 md:w-16"
										src={skill.image}
										alt={`logo de ${skill.name}`}
									/>
								);
						})}
					</div>

					<div className="xl:flex xl:flex-row gap-4 grid grid-cols-3 justify-items-center">
						{main.map((skill, indice) => {
							if (indice > 5)
								return (
									<img
										key={skill.name}
										className="w-10 md:w-16"
										src={skill.image}
										alt={`imagen de ${skill.name}`}
									/>
								);
						})}
					</div>
				</div>
				<p className="font-fireCode dark:text-gray-300 pb-6 text-base md:text-xl text-black mt-10">
					Otras tecnologías:
				</p>
				<div className="flex lg:flex-row justify-around flex-col">
					<div className="lg:flex lg:flex-row gap-4 grid grid-cols-3 justify-items-center">
						{others.map((skill) => {
							return (
								<img
									key={skill.name}
									className="w-10 md:w-16"
									src={skill.image}
									alt={`imagen de ${skill.name}`}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
