import About from "./view/About";
import Home from "./view/Home";
import Proyects from "./view/Proyects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="max-w-[1440px] mx-auto dark:bg-bgbody bg-nuevoWhite relative">
			<header className="">
				<Navbar />
			</header>
			<main>
				<Home />
				<About />
				<Proyects />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
