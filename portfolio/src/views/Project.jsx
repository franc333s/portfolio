import ProjectFooterNav from '../components/projectFooterNav/ProjectFooterNav'
import projectData from '../../projectsData.json'
import ProjectHero from '../components/projectPageBlocks/projectHero/ProjectHero'


export default function Project() {

    const projects = [
        { slug: "crude", title: "CRUDE" },
        { slug: "cuatro-cuatros", title: "Cuatro Cuatros" },
        { slug: "portfolio", title: "Portfolio" },
        { slug: "about-me", title: "About Me" },
        { slug: "alutec", title: "Alutec" }
      ];
    
      return (
        <div>
            <main>
            <ProjectHero
                title={project.title}
                projectLink={project.projectLink}
                imagePath={project.imagePath}
                altText={project.altText}
             />


            </main>
            <ProjectFooterNav projects={projects} />
        </div>
      );
    };
    