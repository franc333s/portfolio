import { Link } from "react-router-dom";
import ButtonTerciary from '../../button/ButtonTerciary';
import ArrowRight from '../../arrows/ArrowRight';
import './ProjectHero.scss';


const ProjectHero = ({ title, linkToSite, imagePathMobile, imagePathDesktop, altText }) => {

    return (
      <>
        <div className="project-hero">
          <div className="project-hero--flex">
            <h1 className="project-hero__title h2">{title}</h1>
            <div className="project-hero__link">
                <ArrowRight /><ButtonTerciary to={linkToSite} text="Visit Website" openInNewTab={true}/>
            </div>
          </div>
          <Link to={linkToSite} target="_blank"><img className="project-hero__image project-hero__image--mobile" src={imagePathMobile} alt={altText}/></Link>
          <Link to={linkToSite} target="_blank"><img className="project-hero__image project-hero__image--desktop" src={imagePathDesktop} alt={altText}/></Link>
        </div>
      </>
    );
  };
  
  export default ProjectHero;

