import { Link } from "react-router-dom";
import ArrowRight from "../components/arrows/ArrowRight"

export default function Contact() {

    return (
        <>

    <div className="contact-page">
        <div className="contact">
            
            <h1 className="h2">Say hey!</h1>
            <p className="p--main contact__text">Currently based in València (SP), I am available to work in office or remotely. If you want to <strong>get in touch, simply drop me a line at</strong>:</p>
            <div className="">
                <ArrowRight /><Link to="mailto:apellidofrances@gmail.com" className="contact__link">Apellidofrances@gmail.com</Link>
            </div>
        </div>
        <div className="contact__profiles">
                <p className="p--main contact__text">Check all my profiles:</p>
                <div className="contact__profiles__grid">
                    <div>
                        <ArrowRight /><Link to="https://github.com/franc333s" className="contact__link" target="_blank">Github</Link>
                    </div>
                    <div>
                        <ArrowRight /><Link to="https://codepen.io/franc333s" className="contact__link" target="_blank">Codepen</Link>
                    </div>
                    <div>
                        <ArrowRight /><Link to="https://www.behance.net/apellidofrances" className="contact__link" target="_blank">Behance</Link>
                    </div>
                    <div>
                        <ArrowRight /><Link to="https://dribbble.com/apellidofrances" className="contact__link" target="_blank">Dribbble</Link>
                    </div>
                    <div>
                        <ArrowRight /><Link to="https://www.linkedin.com/in/mrnfrncs/" className="contact__link" target="_blank">Linkedin</Link>
                    </div>
                    <div>
                        <ArrowRight /><Link to="https://www.instagram.com/apellidofrances" className="contact__link" target="_blank">Instagram</Link>
                    </div>
                </div>
        </div>
    </div>
        

        </>
    )
    }