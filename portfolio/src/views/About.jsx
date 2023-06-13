import ButtonPrimary from "../components/button/ButtonPrimary";
import ButtonSecondary from "../components/button/ButtonSecondary";
import Cta from "../components/cta/Cta";



const About = () => {

    return (
        <>
         <main className="vertical-padding">

            <section className="about-section">
                
                <h2>A little bit of <span className="accent-text"><span className="color-change-on-hover-effect">c</span><span className="color-change-on-hover-effect">o</span><span className="color-change-on-hover-effect">n</span><span className="color-change-on-hover-effect">t</span><span className="color-change-on-hover-effect">e</span><span className="color-change-on-hover-effect">x</span><span className="color-change-on-hover-effect">t</span></span></h2>

                <div className="about-section__text">
                    <p className="p--main about-section__text__top">I’ve done many things over the years. At university, while I studied Industrial Design, I was part of a <strong>furniter design studio</strong> and won an award for our first collection of products. I <strong>lived in the UK for many years</strong> and actually enjoyed their cuisine (no joke here, I love Shepherd's pie). I also worked as an <strong>event supervisor and marketer</strong> for a small Spanish beauty company which made me travel quite a bit around Europe.</p>

                    <div className="about-section__text__bottom">
                        <ButtonPrimary to="/portfolio" text="Check portfolio" />
                        <p className="p--main">And my last job was as a <strong>designer-slash-project manager</strong> where I worked along with other designers, web developers and marketing specialists, <strong>managing web design projects and online advertisement campaigns</strong>.</p>
                    </div>
                </div>

                <div className="about-section__socials">
                    <img className="full-width-image" src="/images/marina-vancouver.jpg" alt="Image Description" />

                    <p className="p--main about-section__socials__text">I've also haved many hobbies, I used to act in theatre plays, I played badminton and even played the saxophone in an orchestra for 10 years. What I enjoy the most nowadays spending my time off in nature and also I spend quite a few time in my laptop, creating digital designs and illustrations and also coding. <strong>I usually share my projects on the internet</strong>. If you'd like to see them, go to:</p>

                    <div className="about-section__socials__btn">
                        <ButtonSecondary to="https://github.com/franc333s" text="Github" openInNewTab={true}/>
                        <ButtonSecondary to="https://codepen.io/franc333s" text="Codepen" openInNewTab={true}/>
                        <ButtonSecondary to="https://www.behance.net/apellidofrances" text="Behance" openInNewTab={true}/>
                        <ButtonSecondary to="https://dribbble.com/apellidofrances" text="Dribbble" openInNewTab={true}/>
                    </div>
                </div>
            </section>


            <Cta />

        </main>
        </>
    )
}

export default About;