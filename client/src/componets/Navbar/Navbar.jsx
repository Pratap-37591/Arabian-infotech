import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div className="nav-header">
          <a href="#">
            <img
              src="https://arabianinfotech.com/assets/images/layout-header__logo.png"
              alt="logo"
            />
          </a>
          <div class="nav-header-menu">
            <div class="dropdown">
              <button class="dropbtn">
                <span>Discover</span> <span>&#x25BC;</span>
              </button>
              <div class="dropdown-content">
                <a href="#">About us</a>
                <a href="#">vision and values</a>
                <a href="#">gallery</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                <span>global campus</span> <span>&#x25BC;</span>
              </button>
              <div class="dropdown-content">
                <div className="dropdown-content-sub">
                  <h3>Middle east</h3>
                  <div></div>

                  <ul>
                    <li>
                      <a href="#">Dubai</a>
                    </li>
                    <li>
                      <a href="#">Qatar</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-content-sub">
                  <h3>south east asia</h3>
                  <div></div>

                  <ul>
                    <li>
                      <a href="#">Malaysia(Coming Soon)</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-content-sub">
                  <h3>africa</h3>
                  <div></div>

                  <ul>
                    <li>
                      <a href="#">Nigeria</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button class="dropbtn">
              <span>programs</span> <span>&#x25BC;</span>
            </button>
            <div class="dropdown-content">
              <div className="dropdown-content-sub">
                <h3>Middle east</h3>
                <div></div>

                <ul>
                  <li>
                    <a href="#">Dubai</a>
                  </li>
                  <li>
                    <a href="#">Qatar</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-content-sub">
                <h3>south east asia</h3>
                <div></div>

                <ul>
                  <li>
                    <a href="#">Malaysia(Coming Soon)</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-content-sub">
                <h3>africa</h3>
                <div></div>

                <ul>
                  <li>
                    <a href="#">Nigeria</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              <span>Discover</span> <span>&#x25BC;</span>
            </button>
            <div class="dropdown-content">
              <a href="#">Item A</a>
              <a href="#">Item B</a>
              <a href="#">Item C</a>
            </div>
          </div>
          <a href="#">Normal Link 1</a>
          <a href="#">Normal Link 2</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
