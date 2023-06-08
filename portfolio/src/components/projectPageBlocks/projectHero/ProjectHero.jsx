import ButtonTerciary from '../../button/ButtonTerciary';
import './ProjectHero.scss';


const ProjectHero = ({ title, linkToSite, imagePathMobile, imagePathDesktop, altText }) => {

    return (
      <>
        <div className="project-hero">
          <div className="project-hero--flex">
            <h1 className="project-hero__title h2">{title}</h1>
            <ButtonTerciary to={linkToSite} text="Visit Website" openInNewTab={true}/>
          </div>
          <img className="project-hero__image project-hero__image--mobile" src={imagePathMobile} alt={altText}/>
          <img className="project-hero__image project-hero__image--desktop" src={imagePathDesktop} alt={altText}/>
        </div>
      </>
    );
  };
  
  export default ProjectHero;

