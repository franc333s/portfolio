import { Link } from "react-router-dom";
import './ProjectBlock.scss';


const ProjectBlock = ({ slug, title, typeOfWork, description }) => {

    const projectLink = `/portfolio/${slug}`; 
    
    return (
  
      <div className="project-block">
        <h2 className="project-block__project-title"><Link to={projectLink} className=''>{title}</Link></h2>
        <p className="project-block__project-role">{typeOfWork}</p>
        <p className="project-block__project-desc">{description}</p>
      </div>
    );
  };
  
  export default ProjectBlock;
