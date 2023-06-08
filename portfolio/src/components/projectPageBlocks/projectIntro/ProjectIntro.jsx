import './ProjectIntro.scss';



const ProjectIntro = ({ introText, imageAuxPathMobile, imageAuxPathDesktop, altTextAuxImage }) => {

    return (
      <>
    <div className="project-intro">
      <p className="project-intro__text">{introText}</p>
      <div className="project-intro__images">
        <img className="project-intro__images--mobile" src={imageAuxPathMobile} alt={altTextAuxImage} />
        <img className="project-intro__images--desktop" src={imageAuxPathDesktop} alt={altTextAuxImage} />
      </div>
    </div>
    </>
  );
};
  
export default ProjectIntro;
