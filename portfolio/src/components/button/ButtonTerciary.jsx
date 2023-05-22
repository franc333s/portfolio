import { Link } from "react-router-dom";
import "./Button.scss";



const ButtonTerciary = ({ to, text, openInNewTab }) => {

  const linkProps = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
	
  return (
    <Link className="btn__terciary" to={to} {...linkProps}>{text}</Link>
  );
};



export default ButtonTerciary;