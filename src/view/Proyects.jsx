import Data from "../data/data.json";
import Card from "../components/Card";
import Title from "../components/Title";

const Proyects = () => {
	const projects = Data.projects;
	console.log(projects);
	return (
		<section
			name="< proyectos />"
			className=" flex flex-col justify-center w-full md:h-full dark:bg-otroFondo font-fireCode px-4 pt-24 pb-4"
		>
			<div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
				<div className="mb-0 md:mb-8 flex justify-center md:inline">
					<Title title="< Proyectos />" />
				</div>
				<p className="font-fireCode dark:text-gray-300 pb-6 text-base md:text-xl text-black py-4">
					Estos son mis proyectos, ¡espero tu feedback!
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 h-auto mt-3 w-full gap-4 md:gap-6 lg:gap-12">
					{projects.map((project) => (
						<Card key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Proyects;
