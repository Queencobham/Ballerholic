import logo from '../assets/images/logo.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import instagram from '../assets/images/instagram.png'
const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer-grp">
                <div className="footer-flex footer-one">
                    <img src={logo} alt="ballerholic" />
                    <div className="form">
                        <input type="text" placeholder='Enter your email' />
                        <button>Subscribe Now</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque.</p>
                </div>

                <div className="footer-flex footer-two">
                    <h4>Tempor dui</h4>
                    <ul>
                        <li><a href="#">mauris uma quis a</a></li>
                        <li><a href="#">Mattis arcu faucibus sed</a></li>
                        <li><a href="#">Risus consectetur eu</a></li>
                        <li><a href="#">Neque elementum</a></li>
                    </ul>
                </div>

                <div className="footer-flex footer-three">
                    <h4>At sit</h4>
                    <ul>
                        <li><a href="#">Nam nam pellentesque </a></li>
                        <li><a href="#">Mattis tortor </a></li>
                        <li><a href="#">Neque</a></li>
                        <li><a href="#">Scelerisque</a></li>
                    </ul>
                </div>

                <div className="footer-flex footer-four">
                    <h4>Mi vitae</h4>
                    <ul>
                        <li><a href="#">English</a></li>
                        <li><a href="#">Arabic</a></li>
                        <li><a href="#">French</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="line">
                <div className="socials">
                <img src={facebook} alt="facebook-icon" />
                <img src={instagram} alt="instagram-icon" />
                <img src={linkedin} alt="linkedin-icon" />
                </div>
                <p>Non Copyrighted © 2023 Design and upload by Nectar</p>
            </div>
        </div>
    )
}

export default Footer
