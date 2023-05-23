import ProjectBlock from '../components/projectBlock/ProjectBlock';
import projectData from '../../projectsData.json'


export default function Portfolio() {

    return (
        <>

        <div className='portfolio'>
            <h1 className='portfolio__header'>Latest Dev / Design projects</h1>

            <div className="portfolio__project">
              {projectData.map((project) => (
                <ProjectBlock
                  key={project.id}
                  title={project.title}
                  slug={project.slug}
                  typeOfWork={project.typeOfWork}
                  description={project.description}
                  />
              ))}
            </div>
          </div>
        </>
    )
    
}



