import { Link } from "react-router-dom";
import "./Button.scss";



const ButtonTerciary = ({ to, text }) => {
  return (
    <Link className="btn__terciary" to={to}>{text}</Link>
  );
};



export default ButtonTerciary;