import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import Footer from "./components/Footer";

function App() {
	return (
		<main className="max-w-[1440px] mx-auto">
			<div className="sticky top-0">
				<Navbar />
			</div>
			<Home />
			<About />
			<Proyects />
			<Footer />
		</main>
	);
}

export default App;
