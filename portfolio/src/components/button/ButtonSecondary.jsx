import { Link } from "react-router-dom";
import "./Button.scss";



const ButtonSecondary = ({ to, text, openInNewTab }) => {

	const linkProps = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
	
	return (


	<Link className="btn--secondary" to={to} {...linkProps}>{text}</Link>

  );
};



export default ButtonSecondary;