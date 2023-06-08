import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Button.scss";

const SmoothScrollButton = ({ to, text }) => {
    const handleClick = () => {
        scroller.scrollTo(to, {
            smooth: true,
            duration: 500,
            offset: -100,
        });
    };

    return (
        <button className="btn--terciary" onClick={handleClick}>
            {text}
        </button>
    );
};

const ButtonTerciary = ({ to, text, openInNewTab, smoothScroll }) => {
    if (smoothScroll) {
        return <SmoothScrollButton to={to} text={text} />;
    } else {
        const linkProps = openInNewTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

        return (
            <Link className="btn--terciary" to={to} {...linkProps}>
                {text}
            </Link>
        );
    }
};

export default ButtonTerciary;
