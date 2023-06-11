import { Route, Routes } from "react-router-dom";
import "./scss/global.scss";

import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";

import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import SingleProject from "./views/SingleProject";
import About from "./views/About";
import Contact from "./views/Contact";


function App() {
	return (
		<>
			<header>
				<Topbar />
			</header>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/portfolio/:slug' element={<SingleProject />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />}/>

			</Routes>

			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
