import { Link } from "react-router-dom";
import "./Button.scss";



const ButtonSecondary = ({ to, text }) => {
  return (

    <Link className="btn__secondary" to={to}>{text}</Link>

  );
};



export default ButtonSecondary;