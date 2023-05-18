import { Link } from "react-router-dom";
import "./Topbar.scss";



function Topbar() {
	return (
		<>
			<div className='topbar'>
				<Link to="/" className='topbar__home'>Marina Francés</Link>
				<nav className='topbar__nav'>
					<Link to="/portfolio" className='topbar__nav__item'>Portfolio</Link>
					<Link to="mailto:marinafase@gmail.com" className='topbar__nav__item justify-self--end'>Contact</Link>
				</nav>

			</div>
		</>
	);
}

export default Topbar;
