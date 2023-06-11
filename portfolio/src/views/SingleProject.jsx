import { useParams } from 'react-router-dom';
import ProjectFooterNav from '../components/projectPageBlocks/projectFooterNav/ProjectFooterNav';
import ProjectHero from '../components/projectPageBlocks/projectHero/ProjectHero';
import projectsData from '../../src/json/projectsData.json';
import Error404 from '../components/error404/404';
import ProjectIntro from '../components/projectPageBlocks/projectIntro/ProjectIntro';
import ProjectDescription from '../components/projectPageBlocks/projectDescription/ProjectDescription';




const SingleProject = () => {
    const { slug } = useParams();
  
    const project = projectsData.find((project) => project.slug === slug);
  
    if (!project) {
      return (
      <>
        <Error404 />
      </>
    )}
  
    // const { title, linkToSite, imagePathMobile, imagePathDesktop, altText } = project;

    const projects = [
        { slug: "crude", title: "CRUDE" },
        { slug: "cuatro-cuatros", title: "Cuatro Cuatros" },
        { slug: "portfolio", title: "Portfolio" },
        { slug: "about-me", title: "About Me" },
        { slug: "alutec", title: "Alutec" }
    ];
    
        return (
            <div>
                <main className="vertical-padding project">

                    <div>
                        <ProjectHero
                            title={project.title}
                            linkToSite={project.linkToSite}
                            imagePathMobile={project.imagePathMobile}
                            imagePathDesktop={project.imagePathDesktop}
                            altText={project.altText}/>
                    </div>

                    <div>
                    <ProjectIntro
                        introText={project.introText}
                        imageAuxPathMobile={project.imageAuxPathMobile}
                        imageAuxPathDesktop={project.imageAuxPathDesktop}
                        altTextAuxImage={project.altTextAuxImage}/>
                    </div>

                    <div>
                        <ProjectDescription
                            role={project.role}
                            tech={project.tech}
                            year={project.year}
                            dev={project.dev}
                            challenges={project.challenges}
                            linkGithub={project.linkGithub}/>
                    </div>

                </main>
                <ProjectFooterNav projects={projects} />
            </div>
      );
    };
    

    export default SingleProject;