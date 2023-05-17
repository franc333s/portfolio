import { Link } from "react-router-dom";
import "./Topbar.scss";


function Topbar() {
	return (
		<>
			<div className='topbar'>
				<Link to="/" >Marina Francés</Link>
				<nav className='topbar__nav__item'>
					<Link to="/portfolio" className=''>Portfolio</Link>
					<Link to="mailto:marinafase@gmail.com" className=''>Contact</Link>
				</nav>

			</div>
		</>
	);
}

export default Topbar;
