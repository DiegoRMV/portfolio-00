import PropTypes from "prop-types";
import Button from "./Button";

const Card = ({ project }) => {
	const { src, alt, title, href, code, description, tech } = project;
	return (
		<div className="dark:shadow-sm hover:scale-[1.02] duration-500 bg-stone-100 dark:bg-neutral-950 dark:border-neutral-700 gap-4 xl:gap-12 border-solid border-2 border-slate-600 p-0 md:p-3 lg:p-5 flex flex-col h-full w-full dark:text-nuevoWhite rounded-3xl">
			<div className="max-h-1/2">
				<img src={src} alt={alt} className=" w-auto rounded-xl" />
			</div>
			<div className="flex flex-col h-full justify-between text-center px-2 md:px-0">
				<div className="flex flex-col h-full w-full gap-6 ">
					<h2 className="text-center uppercase text-2xl lg:text-3xl xl:text-4xl font-fireCode font-bold">
						{title}
					</h2>
					<div className="grow h-full">
						<p className="text-start text-sm">{description}</p>
					</div>
				</div>
				<div className="flex flex-row flex-wrap gap-4 justify-center rounded-lg py-6 px-4">
					{tech.map((t) => {
						if (t === "zustand")
							return (
								<img
									className="w-8 lg:w-10"
									key={t}
									src={`/${t.toLowerCase()}.ico`}
									alt={`logo de ${t}`}
								/>
							);
						else
							return (
								<img
									className="w-8 lg:w-10"
									key={t}
									src={`/svgs/${t.toLowerCase()}.svg`}
									alt={`logo de ${t}`}
								/>
							);
					})}
				</div>
				<div className="flex flex-row justify-around p-6">
					<Button href={href} title={"Deploy"} />
					<Button href={code} title={"Code"} />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	project: PropTypes.object,
};

export default Card;
