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
                <img className="full-width-image" src="/images/marina-portfolio.jpg" alt="Image of myself leaning against a white wall" />
                <p className="huge-text">Hey! My name is Marina and I am a <strong>frontend developer</strong> passionate about desinging and coding clean and straightforward digital solutions with an edge. </p>
            </section>

            <section className="cards-section">

                <div className="cards-section__left">
                    <h3 className="text-color-black">Check my work</h3>
                    <p className="p--main">Blablablablabllbabbabsaljhd</p>
                    <ButtonPrimary to="/portfolio" text="Check portfolio" />
                </div>

                <div className="cards-section__right">
                    <h3 className="text-color-black">Get to know me better</h3>

                    <p className="p--main">I’m an ex-industrial designer who developed a professional career in project management at digital agencies. Currently coding cool projects for awesome people.</p>
                    <ButtonSecondary to="/about" text="Go to About Me"/>
                </div>
            </section>

            <Cta />

        </main>
        </>
    )
}

export default Home;