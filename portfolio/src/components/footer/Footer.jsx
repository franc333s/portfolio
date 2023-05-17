import { Link } from "react-router-dom";
import "./Footer.scss";



function Footer() {
	return (
		<>
			<div className='footer'>
				<nav className="footer__social">
					<Link to="mailto:marinafase@gmail.com" className='footer__social__item'>Contact</Link>
					<Link to="https://github.com/franc333s" target="_blank" className='footer__social__item'>Github</Link>
					<Link to="https://dribbble.com/apellidofrances" target="_blank" className='footer__social__item'>Dribbble</Link>
					<Link to="https://www.linkedin.com/in/mrnfrncs/" target="_blank" className='footer__social__item'>Linkedin</Link>
				</nav>

                <p className="footer__name">&#169;Marina Francés 2023</p>

			</div>
		</>
	);
}

export default Footer;
