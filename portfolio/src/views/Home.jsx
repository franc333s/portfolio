import ButtonPrimary from "../components/button/ButtonPrimary";
import ButtonSecondary from "../components/button/ButtonSecondary";
import ButtonTerciary from "../components/button/ButtonTerciary";
import RotatingBanner from "../components/rotatingBanner/RotatingBanner";
import Cta from "../components/cta/Cta";



const Home = () => {

    return (
        <>
         <main className="vertical-padding">

            <section className="home-hero">
                <div className="home-hero__header">
                    <RotatingBanner className="home-hero__header__a"/>
                    <h1>
                        <div>Frontend Designer</div> 
                        <div>with a background</div>
                        <div>in Digital Design</div>
                    </h1>
                </div>
                <ButtonTerciary to="intro-section" text="Know more" smoothScroll={true} />
            </section>

            <section className="home-intro" id="intro-section">
                <p className="home-intro__text padding-bottom-4rem">Hey! My name is Marina and I am a junior <strong>frontend developer</strong> passionate about desinging and coding clean and straightforward digital solutions with an edge.</p>
                <img className="full-width-image" src="/images/marina-portfolio.jpg" alt="Image of myself leaning against a white wall" />

            </section>
            <section>
                <div className="cards-section">

                    <div className="cards-section__left">
                        <h3 className="text-color-black">Check my work</h3>
                        <p className="p--main">This website showcases all the projects I have been developing throughout my journey as a frontend developer. In some of them, I have taken on the role of UI/UX designer and frontend developer, while in others, I have focused on code development. Discover them all at: </p>
                        {/* <p className="p--main">Hey! My name is Marina and I am a <strong>Junior Front-End Developer</strong> passionate about desinging and coding clean and straightforward digital solutions with an edge.</p> */}
                        <ButtonPrimary to="/portfolio" text="Check portfolio" />
                    </div>

                    <div className="cards-section__right">
                        <h3 className="text-color-black">Get to know me</h3>
                        
                        <p className="p--main padding-top-2rem">I studied Industrial Design Engineering at Polytechnic University of València and completed a master's degree in Furniture Design at London Metropolitan University. In my last job, I worked as a <strong>project manager for digital products</strong>, and it was there where I discovered web design. Recently, I completed a Postgraduate Diploma in Front-End Web Design and Development.</p>
                        <ButtonSecondary to="/about" text="Read more"/>
                    </div>
                </div>
            </section>

            <Cta />

        </main>
        </>
    )
}

export default Home;