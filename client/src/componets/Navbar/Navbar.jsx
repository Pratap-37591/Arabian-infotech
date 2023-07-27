import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div className="nav-header">
          <a href="/">
            <img
              src="https://arabianinfotech.com/assets/images/layout-header__logo.png"
              alt="logo"
            />
          </a>
          <div class="nav-header-menu">
            <ul className="dropdown">
              <li className="menu-content">
                <a href="/" className="menu-hover">
                  discover
                </a>
                <div></div>
                <div className="dropdown-content display_block1">
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">vision and values</a>
                    </li>
                    <li>
                      <a href="#">gallery</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-content">
                <a href="/" className="menu-hover">
                  global campus
                </a>
                <div></div>
                <div className="dropdown-content display_block2">
                  <div className="separate-dropdown">
                    <h4>MIDDLE EAST</h4>
                    <div></div>
                    <ul>
                      <li>
                        <a href="#">Dubai</a>
                      </li>
                      <li>
                        <a href="#">vision and values</a>
                      </li>
                    </ul>
                  </div>
                  <div className="separate-dropdown">
                    <h4>SOUTH EAST ASIA</h4>
                    <div></div>
                    <ul>
                      <li>
                        <a href="#">Malaysia (Coming Soon)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="separate-dropdown">
                    <h4>AFRICA</h4>
                    <div></div>
                    <ul>
                      <li>
                        <a href="#">Nigeria</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu-content">
                <a href="/" className="menu-hover">
                  programs
                </a>
                <div className="dropdown-content display_block3">
                  <ul className="separate-dropdown">
                    <li>
                      <a href="/">Civil Structure</a>
                      <div className="menu-dropdown">
                        <ul>
                          <li>
                            <a href="#">(RCC Voltage )</a>
                          </li>
                          <li>
                            <a href="#">MVV Design</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="/">MPP Design</a>
                      <div className="menu-dropdown">
                        <ul>
                          <li>
                            <a href="#">High Voltage</a>
                          </li>
                          <li>
                            <a href="#">Cpp(RCC)</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="/">MEP industry</a>
                      <div className="menu-dropdown">
                        <ul>
                          <li>
                            <a href="#">electrical</a>
                          </li>
                          <li>
                            <a href="#">Mechnical</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="/">Civil Eng</a>
                      <div className="menu-dropdown">
                        <ul>
                          <li>
                            <a href="#">(RCC Voltage )</a>
                          </li>
                          <li>
                            <a href="#">MVV Design</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-content">
                <a href="/" className="menu-hover">
                  events
                </a>
              </li>
              <li className="menu-content">
                <a href="/" className="menu-hover">
                  contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
{
  /* <a class="dropbtn">
                <span>Discover</span> <span>&#x25BC;</span>
              </a>
              <div class="dropdown-content">
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">vision and values</a>
                  </li>
                  <li>
                    <a href="#">gallery</a>{" "}
                  </li>
                </ul>
              </div> 
            </div>
            <div class="dropdown">
              <a class="dropbtn">
                <span>global campus</span> <span>&#x25BC;</span>
              </a>
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
            <a class="dropbtn">
              <span>programs</span> <span>&#x25BC;</span>
            </a>
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
            
            <div class="dropdown">
            <a class="dropbtn">
            <span>Discover</span> <span>&#x25BC;</span>
            </a>
            <div class="dropdown-content">
            <a href="#">Item A</a>
            <a href="#">Item B</a>
            <a href="#">Item C</a>
            </div> */
}
