import { Link } from "react-router-dom";
import ArrowRight from "../../arrows/ArrowRight";
import './ProjectDescription.scss';


const renderParagraphs = (text) => {
    const formattedText = text.replace(/\n/g, "\n\n");
    return formattedText.split("\n\n").map((paragraph, index) => (
      <p className="project-desc__text" key={index}>{paragraph}</p>
    ));
  };
  

const ProjectDescription = ({ role, tech, year, dev, challenges, linkGithub }) => {

    return (
    <>
        <div className="project-desc">


            <div className="project-desc__role-tech-yr">

                <div>
                    <p className="project-desc__title">Role</p>
                    <p className="project-desc__text">{role}</p>
                </div>
                <div>
                    <p className="project-desc__title">Technology</p>
                    <p className="project-desc__text">{tech}</p>
                </div>
                <div>
                    <p className="project-desc__title">Year</p>
                    <p className="project-desc__text">{year}</p>
                </div>

            </div>


            <div className="project-desc__dev-chall-links">

                <div className="project-desc__dev">
                    <p className="project-desc__title">Development process</p>
                    {renderParagraphs(dev)}
                </div>

                <div className="project-desc__chall-links">
                    <div>
                        <p className="project-desc__title">Challenges</p>
                        {renderParagraphs(challenges)}
                    </div>
                    <div className="project-desc__links">
                        <p className="project-desc__text "><ArrowRight />Check this project on <Link to={linkGithub} className='project-desc__links__item' target="_blank">Github</Link>.</p>
                    </div>
                </div>

            </div>


        </div>
    </>
  );
};
  
export default ProjectDescription;