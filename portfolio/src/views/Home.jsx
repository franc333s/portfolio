import React, { useEffect } from "react";

import ButtonPrimary from "../components/button/ButtonPrimary";
import ButtonSecondary from "../components/button/ButtonSecondary";
import ButtonTerciary from "../components/button/ButtonTerciary";


const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
      
          // Obtén referencias a los elementos que deseas animar
          const slowElements = document.querySelectorAll(".speed-slow");
          const mediumElements = document.querySelectorAll(".speed-medium");
          const fastElements = document.querySelectorAll(".speed-fast");
      
          // Calcula las transformaciones basadas en el desplazamiento vertical
          const slowTransform = `translateY(${scrollY * -0.1}px)`;
          const mediumTransform = `translateY(${scrollY * -0.15}px)`;
          const fastTransform = `translateY(${scrollY * -0.2}px)`;
      
          // Aplica las transformaciones a los elementos correspondientes
          slowElements.forEach((element) => {
            element.style.transform = slowTransform;
          });
      
          mediumElements.forEach((element) => {
            element.style.transform = mediumTransform;
          });
      
          fastElements.forEach((element) => {
            element.style.transform = fastTransform;
          });
        };
      
        // Agrega el controlador de evento al evento "scroll"
        window.addEventListener("scroll", handleScroll);
      
        // Limpia el controlador de evento cuando el componente se desmonta
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      
    return (
        <>
         <div className="home">
        <main className="main--padding">
            
            <section className="intro">
                <div className="intro__hero">
                    <h1 className="intro__hero__title">Frontend Designer 
                    <br />with a background 
                    <br />in Digital Design</h1>

                </div>

                <ButtonTerciary to="/" text="Know more"/>

                <div className="intro__desc">
                    <p className="p--main text-color-black intro__desc-text speed-slow">I’m an ex-industrial designer who developed a professional career in project management at digital agencies. Currently <strong>coding cool projects</strong> for awesome people.
                    </p>
                    <img className="full-width-image" src="/images/marina-portfolio.jpg" alt="Image Description" />
                </div>

            </section>

            <section className="about-section">
            
                <h2 className="speed-medium">A little bit of<span className="accent-text"> context</span></h2>

                <div className="about-section__text">
                    <p className="p--main about-section__text__top speed-slow">I’ve done many things over the years. At university I was part of a <strong>furniter design studio</strong> and won an award for our first collection of products. I <strong>lived in the UK for many years</strong> and actually enjoyed their cuisine (no joke here, I love Shepherd's pie). I also worked as an <strong>event supervisor and marketer</strong> for a small Spanish beauty company which made me travel quite a bit around Europe.</p>

                    <div className="about-section__text__bottom  speed-medium">
                        <ButtonPrimary to="/portfolio" text="Check portfolio" className="" />
                        <p className="p--main">And my last job was as a <strong>designer-slash-project manager</strong> where I worked along with other designers, web developers and marketing specialists, <strong>managing web design projects and online advertisement campaigns</strong>.</p>
                    </div>

                </div>

                <div className="about-section__socials">
                    <img className="full-width-image speed-slow" src="/images/marina-vancouver.jpg" alt="Image Description" />

                    <p className="p--main about-section__socials__text">I also have many hobbies, I used to act in theatre plays, I played badminton and even played the saxophone in an orchestra for 10 years. What I enjoy the most nowadays is learning to code and creating digital designs and illustrations. <strong>I usually share my projects on the internet</strong>. You can find them in:</p>

                    <div className="about-section__socials__btn">
                        <ButtonSecondary to="https://github.com/franc333s" text="Github" openInNewTab={true}/>
                        <ButtonSecondary to="https://codepen.io/franc333s" text="Codepen" openInNewTab={true}/>
                        <ButtonSecondary to="https://www.behance.net/apellidofrances" text="Behance" openInNewTab={true}/>
                        <ButtonSecondary to="https://dribbble.com/apellidofrances" text="Dribbble" openInNewTab={true}/>
                    </div>
                </div>
            
            </section>

            <section className="cards-section">
                <div className="cards-section__left speed-slow">
                    <h3 className="text-color-black">What I can offer</h3>
                    <p className="p--main">As a junior there are plenty of knowledge to acquire, however, what I already am experienced in working in teams, as I have 7 years of experience in offices, 4 de ellos en una agencia de diseño digital.</p>
                </div>

                <div className="cards-section__right speed-medium">
                    <h3 className="text-color-black">What I can offer</h3>
                    <p className="p--main">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>

            </section>


            <section className="cta-section">
                <div className="cta-section__claim">
                    <p className="h2">Let's <span className="accent-text text-lowercase-reg">talk!</span></p>
                    
                </div>
                <ButtonPrimary to="mailto:marinafase@gmail.com" text="Email me"/>
            </section>

        </main>
        </div>
        </>
    )
}

export default Home;