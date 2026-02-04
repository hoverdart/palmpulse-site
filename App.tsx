import React, { useEffect } from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Technology from "./components/Technology";
import Impact from "./components/Impact";
import Privacy from "./components/Privacy";
import Credits from "./components/Credits";
import Footer from "./components/Footer";

const App: React.FC = () => {
	return (
		<Router>
			<div className="flex flex-col h-screen overflow-hidden">
				<Navbar />
				<main className="flex-grow h-[calc(100vh-5rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth">
					<ScrollToTop />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/technology" element={<Technology />} />
						<Route path="/impact" element={<Impact />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/credits" element={<Credits />} />
					</Routes>
					<Footer />
				</main>
				
			</div>
		</Router>
	);
};

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		const main = document.querySelector("main");
		if (main) {
			main.scrollTo(0, 0);
		}
	}, [pathname]);
	return null;
};

export default App;
