import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* Left part with social icons and links */}
        <div className="left">
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
        </div>

        {/* Right part with country images and register button */}
        <div className="right">
          <div className="laguage-switch">
            <a href="#">
              <img
                src="https://arabianinfotech.com/assets/images/lang-en.png"
                alt="India"
              />
            </a>
            <a href="#"></a>
            <img
              src="https://arabianinfotech.com/assets/images/lang-ar.png"
              alt="Arabia"
            />
          </div>
          <a className="register-button">
            <img
              src="https://arabianinfotech.com/assets/images/header__register-btn.png"
              alt="User Icon"
            />
            <span> Register now</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
