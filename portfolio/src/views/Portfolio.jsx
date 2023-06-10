import ProjectBlock from '../components/projectBlock/ProjectBlock';
import projectData from '../../src/json/projectsData.json'


export default function Portfolio() {

    return (
        <>
        <main className="vertical-padding portfolio">
            <h1 className="portfolio__header">Latest Dev / Design projects</h1>
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
          </main>
        </>
    )
    
}



