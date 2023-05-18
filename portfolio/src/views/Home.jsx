import ButtonPrimary from "../components/button/ButtonPrimary";
import ButtonSecondary from "../components/button/ButtonSecondary";
import ButtonTerciary from "../components/button/ButtonTerciary";


export default function Home() {
    return (
        <>
            <section className="hero">
                <h1 className="hero__title">Frontend Designer 
                <br />with a background 
                <br />in Digital Design</h1>
            </section>

            <ButtonTerciary to="/about" text="Know more"/>


            <section>
                <p className="p--main text-color-black">I’m an ex-industrial designer who developed a professional career in project management at digital agencies. Currently <strong>coding cool projects</strong> for awesome people.
                </p>
                <img className="hero__image" src="/images/marina-portfolio.jpg" alt="Image Description" />
            </section>
        </>
    )
}