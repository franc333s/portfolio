import { Route, Routes } from "react-router-dom";
import "./scss/global.scss";

import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";

import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Project from "./views/Project";

function App() {
	return (
		<>
			<header>
				<Topbar />
        		{/* <h1>This line shows App.jsx</h1> */}
			</header>

			<main className="main">
      			<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/portfolio/:projectName' element={<Project />} />
				</Routes>
			</main>

			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
