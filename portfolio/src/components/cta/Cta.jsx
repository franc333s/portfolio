
import ButtonPrimary from "../button/ButtonPrimary";
import "./Cta.scss";


function Cta() {
	
	return (
		<>
            <section className="cta-section">
                <div className="cta-section__claim">
                    <p className="h2">Let's <span className="accent-text text-lowercase-reg"><span className="color-change-on-hover-effect">t</span><span className="color-change-on-hover-effect">a</span><span className="color-change-on-hover-effect">l</span><span className="color-change-on-hover-effect">k</span><span className="color-change-on-hover-effect">!</span></span></p>
                    
                </div>
                <ButtonPrimary to="mailto:marinafase@gmail.com" text="Email me"/>
            </section>
        </>

	);
  };

export default Cta;