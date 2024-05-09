import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";
import  Data  from "../data/data.json";
import Typewriter from "typewriter-effect";
import ArticleSocial from "../components/ArticleSocial";

const Home = () => {
	const { profiles, basics } = Data;
	const { name, nickname, title, label, image } = basics;

	return (
		<section name="< inicio />" className="dark:text-white text-gray-900 pt-24">
			<div className="max-w-screen-xl mx-auto h-full md:flex-row px-4">
				<div className="flex flex-col justify-center h-full">
					<div className="flex-grow lg:flex justify-center items-center pt-2">
						<div className="flex justify-center item-center lg:w-1/3 py-2">
							<img
								className="rounded-full"
								src={image}
								alt={`foto de ${name}`}
								width={300}
								height={400}
							/>
						</div>

						<h2 className="font-oswald xl:text-[80px]  lg:text-[60px] sm:text-[40px] text-center  text-[20px] font-bold py-2">
							{nickname}, {title}
						</h2>
					</div>

					<div className="h-[2px] bg-slate-400 my-2 md:my-8"></div>
					<div className="flex justify-center items-center">
						<span className="text-sm md:text-lg xl:text-xl font-fireCode dark:text-gray-300 py-4 text-gray-950 dark:font-normal font-semibold">
							<Typewriter
								options={{
									strings: label,
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
					</div>
					<div className="2xl:hidden flex flex-row dark:text-white justify-center gap-10 py-2">
						<ArticleSocial profiles={profiles} />
					</div>
					<div className="flex justify-center items-center ">
						<Link
							to="< proyectos />"
							smooth
							duration={500}
							className="font-fireCode group text-white w-fit py-1 px-4 md:px-6 md:py-2 my-4 flex items-center rounded-md font-semibold bg-nuevo dark:bg-greengd1 hover:scale-110 duration-200 cursor-pointer"
						>
							Proyectos
							<span className="group-hover:rotate-90 duration-300 pl-1">
								<MdDoubleArrow size={20} />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
