import { Link, useLocation } from "react-router-dom";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";
import "./ProjectFooterNav.scss";




const ProjectFooterNav = ({ projects }) => {

	const location = useLocation();
	const currentSlug = location.pathname.replace("/portfolio/", ""); // Localizar el slug actual a partir de la ruta
  
	const currentIndex = projects.findIndex(project => project.slug === currentSlug);
	const previousIndex = currentIndex > 0 ? currentIndex - 1 : null;
	const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : null;
  
	const previousLink = previousIndex !== null ? `/portfolio/${projects[previousIndex].slug}` : null;
	const portfolioLink = "/portfolio";
	const nextLink = nextIndex !== null ? `/portfolio/${projects[nextIndex].slug}` : null;
  
	return (
	  <div className="projects-nav">
		{previousLink && <Link to={previousLink} className="projects-nav__item projects-nav__item--prev"><ArrowLeft />Previous project</Link>}
		<Link to={portfolioLink} className="projects-nav__item projects-nav__item--all">All projects</Link>
		{nextLink && <Link to={nextLink} className="projects-nav__item projects-nav__item--next">Next project<ArrowRight /></Link>}
	  </div>
	);
  };
  
  export default ProjectFooterNav;
