import { Link } from "react-router-dom";
import ArrowRight from "../components/arrows/ArrowRight"

export default function Contact() {

    return (
    <>
    <main className="contact">

        <div className="vertical-padding">
            
            <h1 className="h2">Say <span className="color-change-on-hover-effect">h</span><span className="color-change-on-hover-effect">e</span><span className="color-change-on-hover-effect">y</span><span className="color-change-on-hover-effect">!</span></h1>
            <p className="p--main contact__desc">Currently based in València (SP), I am available to work in office or remotely. If you want to <strong>get in touch, drop me a line at</strong>:</p>
            <div className="contact__email-container">
                <ArrowRight /><Link to="mailto:apellidofrances@gmail.com" className="contact__link__item">Apellidofrances@gmail.com</Link>
            </div>

        </div>

        <div className="contact__profiles">
            <p className="p--main">Check all my profiles:</p>
            <div className="contact__profiles__grid">

                <div>
                    <ArrowRight /><Link to="https://github.com/franc333s" className="contact__link__item" target="_blank">Github</Link>
                </div>
                <div>
                    <ArrowRight /><Link to="https://codepen.io/franc333s" className="contact__link__item" target="_blank">Codepen</Link>
                </div>
                <div>
                    <ArrowRight /><Link to="https://www.behance.net/apellidofrances" className="contact__link__item" target="_blank">Behance</Link>
                </div>
                <div>
                    <ArrowRight /><Link to="https://dribbble.com/apellidofrances" className="contact__link__item" target="_blank">Dribbble</Link>
                </div>
                <div>
                    <ArrowRight /><Link to="https://www.linkedin.com/in/mrnfrncs/" className="contact__link__item" target="_blank">Linkedin</Link>
                </div>
                <div>
                    <ArrowRight /><Link to="https://www.instagram.com/apellidofrances" className="contact__link__item" target="_blank">Instagram</Link>
                </div>

            </div>
        </div>
    </main>
    </>
    )
}