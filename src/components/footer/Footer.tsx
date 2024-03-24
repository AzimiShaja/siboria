import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"
import "./footer.style.scss"
const Footer = () => {
    return (
        <footer>
            <div className="footer-context">
                <div className="footer-text">
                    <h1>Resources</h1>
                    <p>Download</p>
                    <p>Help Center</p>
                    <p>Guide Book</p>
                    <p>App Directory</p>
                </div>
                <div className="footer-text">
                    <h1>Seboria</h1>
                    <p>Why Seboria</p>
                    <p>Our Collaboration Process </p>
                    <p>Customer Services</p>
                    <p>Instagram Post</p>
                </div>
                <div className="footer-text">
                    <h1>Company</h1>
                    <p>Antiques</p>
                    <p>About Seboria</p>
                    <p>Success</p>
                    <p>Information</p>
                </div>
                <div className="footer-text">
                    <h1>Get in Touch</h1>
                    <p>Feel Free to get in touch with us via email</p>
                    <p className="email">shakir260@gmail.com</p>
                </div>
            </div>
            <div className="footer-2-context">
                <h1 className="logo">Seboria<span>.</span></h1>
                <nav>
                    <div>
                        <a className="active-nav" href="#home">
                            Home
                        </a>
                        <div className="active-bar"></div>
                    </div>
                    <a>Collections</a>
                    <a>How We Collect</a>
                    <a>Sell An Antique</a>
                    <a>Blog</a>
                </nav>
                <div className="social-links">
                    <FaXTwitter />
                    <FaFacebook />
                    <FaInstagram />
                </div>
            </div>
        </footer>
    )
}

export default Footer