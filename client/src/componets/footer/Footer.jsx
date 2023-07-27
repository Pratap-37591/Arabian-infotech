import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer-layout">
        <div className="footer">
          <div className="footer__container">
            <div className="footer_item">
              <p className="footer_title">Quick Links</p>
              <nav className="footer_menu">
                <ul className="footer-menu-part">
                  <section>
                    <li>
                      <a href=""> Online Registration </a>
                    </li>
                    <li>
                      <a href=""> Online Inquiry </a>
                    </li>
                    <li>
                      <a href=""> Refund & Other Terms </a>
                    </li>
                    <li>
                      <a href=""> Privacy Policy </a>
                    </li>
                    <li>
                      <a href=""> Public Training </a>
                    </li>
                  </section>
                  <section>
                    <li>
                      <a href=""> MEP Electrical Design Training in Dubai </a>
                    </li>
                    <li>
                      <a href=""> Fire Fighting System Design </a>
                    </li>
                    <li>
                      <a href=""> HVAC Designing and training in UAE </a>
                    </li>
                    <li>
                      <a href=""> Careers </a>
                    </li>
                    <li>
                      <a href=""> Request For Call Back </a>
                    </li>
                    <li>
                      <a href=""> Blog </a>
                    </li>
                  </section>
                </ul>
              </nav>
            </div>
            <div className="footer_item footer-item2">
              <p className="footer_title">Get in Touch</p>
              <div className="footer_contacts">
                <p>
                  <i class="fa fa-phone" style={{ margin: "0px 5px" }}></i>{" "}
                  <span> Duabi</span>
                </p>
                <p>
                  <i class="fa fa-phone"></i> <span>800 800 050 (UAE)</span>
                </p>
                <p>
                  <i class="fa fa-phone"></i> <span>+971 4 228 1166</span>
                </p>
                <p>
                  <i class="fa fa-phone"></i> <span>(04) 228 1166</span>
                </p>
                <p>
                  <i class="fas fa-location-arrow"></i>
                  <span>
                    {" "}
                    Suite 205 & 206, Second Floor, Al Hamriya Building, Same FAB
                    Bank & Atkins Building, Burjuman, Dubai – UAE. PO Box 52019
                  </span>
                </p>
                <p>
                  <i class="fa fa-phone"></i> <span>+974 4455 3138</span>
                </p>
                <p>
                  <i class="fa fa-envelope"></i>
                  <span>contact@arabianinfotech.com</span>
                </p>
              </div>
              <div className="contact_us">
                <p className="footer_title">Follow Us</p>
                <span className="footer_social">
                  <a href="https://example.com">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://example.com">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://example.com">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="https://example.com">
                    <i class="fab fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p className="footer_copywrite">
            ©️ AllRights reserved by 👨‍💻 Pratap Shivashankar H B ❤️<sup>©️ TM</sup>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
