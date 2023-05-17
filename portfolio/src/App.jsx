import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./scss/global.scss";

import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";

import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";

function App() {
	return (
		<>
			<header>
				<Topbar />
        		<h1>This is App.jsx</h1>
			</header>

			<main>
      			<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
