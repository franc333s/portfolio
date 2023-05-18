import { Link } from "react-router-dom";
import "./Button.scss";


const ButtonPrimary = ({ to, text }) => {
	return (
	  
	  <Link  className="btn__primary" to={to}>{text}</Link>

	);
  };

export default ButtonPrimary;