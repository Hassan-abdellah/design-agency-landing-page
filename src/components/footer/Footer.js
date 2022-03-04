import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="wrapper">
            <div className="follow">
                <p>Follow Us on Social Media:</p>
                <ul>
                    <li>
                        <a href="#">
                            <img src="/images/facebook.svg" alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/twitter.svg" alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/instagram.svg" alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/github.svg" alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/linkedin.svg" alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/pinterest.svg" alt="pintrest" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-middle">
                <ul>
                    <li><h3>About</h3></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Remote Work</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
                <ul>
                    <li><h3>About</h3></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Remote Work</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
                <ul>
                    <li><h3>About</h3></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Remote Work</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
                {/* <ul>
                    <li><h3>About</h3></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Remote Work</a></li>
                    <li><a href="#">Vision</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul> */}
            </div>
            <div className="footer-bottom">
                <p>All Copyright &copy; Reserved for Design<span>Agency</span> 2022</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer