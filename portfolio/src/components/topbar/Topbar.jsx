import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Topbar.scss";



// function Topbar() {
// 	return (
// 		<>
// 			<div className='topbar'>
// 				<Link to="/" className='topbar__home'>Marina Francés</Link>
// 				<nav className='topbar__nav'>
// 				<Link to="/portfolio" className='topbar__nav__item'>Portfolio</Link>
// 				<Link to="/contact" className='topbar__nav__item justify-self--end'>Contact</Link>
// 				</nav>

// 			</div>
// 		</>
// 	);
// }

// export default Topbar;



function Topbar() {

	const [ menu , setMenu ] = useState( false )

	const toggleMenu = () => {
	  setMenu( !menu )
	}
  
	const closeMenu = () => {
	  setMenu( false )
	}

	return (
		<>
			<div className="topbar">
	
			<Link onClick={ closeMenu } to="/" className="topbar__home">Marina Francés</Link>
	
			<button onClick={ toggleMenu } className="topbar__btn">Menu</button>
	
			<nav className={ `topbar__nav ${ menu ? 'isActive' : '' }` }>

				<ul className="topbar__nav__list">

					<li className="topbar__nav__list__item"><Link onClick={ closeMenu }  to="/portfolio" className="topbar__nav__item">Portfolio</Link></li>

					<li className="topbar__nav__list__item"><Link onClick={ closeMenu }  to="/about" className="topbar__nav__item">About me</Link></li>

					<li className="topbar__nav__list__item"><Link onClick={ closeMenu } to="/contact" className="topbar__nav__item">Contact</Link></li>

				</ul>
				
			</nav>
	
			</div>
		</>
		)
}
	
export default Topbar;