import { Link } from "react-router-dom";
import './ProjectHero.scss';


const ProjectHero = ({ title, linkToSite, imagePath }) => {

    return (
  
      <div className="project-hero">
        <h1 className="project-hero__title">{title}</h1>
        <Link to={linkToSite} className=''>Visit Website</Link>
        <img src={imagePath} alt={altText} />
      </div>
    );
  };
  
  export default ProjectHero;
