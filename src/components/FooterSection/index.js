import "./index.css"
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const Footer=()=>{
    return (
        <div className="footer-section">
            <div className="footer-upper-section">
                <div className="sign-up-updates">
                    <h1>BE THE FIRST TO KNOW</h1>
                    <p>Sign up for updates from mettā muse.</p>
                    <div className="input-container">
                        <input type="email" placeholder="Enter your e-mail..."/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="contact-us">
                    <h1>CONTACT US</h1>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h1>Currency</h1>
                    <div className="currecy-container">
                        <div>
                        <img src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723311062/United_States_of_America_US_jos1or.jpg" 
                         alt="us dollars" className="dollar-image"/>
                         </div>
                    <p>+ USD</p>
                    </div>
                    <p className="transaction-quote">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
            <hr className="horizontal-divider"/>
            <div className="footer-bottom-section">
                <div className="metta-muse-container">
                    <h1>metta muse</h1>
                    <ul className="list-items">
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>
                <div className="quick-links">
                    <h1>QUICK LINKS</h1>
                    <ul className="list-items">
                        <li>Orders & Shipping </li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="follow-us">
                    <div className="social-icons">
                    <h1>Follow Us</h1>
                    <div className="icons">
                        <FaLinkedin color="#fff" gap={10} size={25} />
                        <IoLogoInstagram color="#fff" size={25}/>
                    </div>
                    </div>
                    <p className="text">mettā muse ACCEPTS</p>
                    <ul className="payments">
                        <li>
                            <img src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310630/Group_136188_uhvddz.jpg" 
                            alt="google pay" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310659/Group_136190_i4hyyg.jpg" 
                            alt="credit card" />
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310683/Group_136192_rvz1zy.jpg" 
                            alt="pay pal"/>
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310717/Group_136193_vl08kt.jpg" 
                            alt="amex pay"/>
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310736/Group_136194_yfavf4.jpg" 
                            alt="apple pay"/>
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310758/Group_136195_f319mq.jpg" 
                            alt="o pay"/>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <p className="copyrights">Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    )
}

export default Footer