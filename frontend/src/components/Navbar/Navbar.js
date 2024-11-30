import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import MenuIcon from "../../assets/menu-icon.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownState, setDropdownState] = useState({}); // Track open dropdowns

  // Scroll to top on route change and reset menu states
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
    setMobileMenu(false); // Close mobile menu
    setDropdownState({}); // Reset dropdowns
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".menu");
      const menuIcon = document.querySelector(".menu-icon");

      // Check if the click is outside the menu and not on the menu icon
      if (
        menu &&
        menuIcon &&
        !menu.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        setMobileMenu(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const ToggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleMouseEnter = (menuKey) => {
    if (window.innerWidth > 960) {
      setDropdownState((prev) => ({ ...prev, [menuKey]: true }));
    }
  };

  const handleMouseLeave = (menuKey) => {
    if (window.innerWidth > 960) {
      setDropdownState((prev) => ({ ...prev, [menuKey]: false }));
    }
  };

  const toggleDropdown = (menuKey) => {
    if (window.innerWidth <= 960) {
      setDropdownState((prev) => ({ ...prev, [menuKey]: !prev[menuKey] }));
    }
  };

  return (
    <nav className="my-container dark-nav ">
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`menu ${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li className="menu-items">
          <Link to="/" onClick={() => setMobileMenu(false)}>
            Home
          </Link>
        </li>
        <li
          className="menu-items"
          onMouseEnter={() => handleMouseEnter("about-us")}
          onMouseLeave={() => handleMouseLeave("about-us")}
        >
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownState["about-us"] ? "true" : "false"}
            onClick={() => toggleDropdown("about-us")}
          >
            About Us <span className="arrow"></span>
          </button>
          <ul className={`dropdown ${dropdownState["about-us"] ? "show" : ""}`}>
            <li>
              <Link to="/about-us/at-a-glance" onClick={ToggleMenu}>
                At a Glance
              </Link>
            </li>
            <li>
              <Link to="/about-us/our-mission" onClick={ToggleMenu}>
                Our Mission
              </Link>
            </li>
            <li>
              <Link to="/about-us/our-values" onClick={ToggleMenu}>
                Our Values
              </Link>
            </li>
            <li>
              <Link to="/about-us/global-presence" onClick={ToggleMenu}>
                Global Presence
              </Link>
            </li>
            <li>
              <Link
                to="/about-us/our-network-and-partnerships"
                onClick={ToggleMenu}
              >
                Our Network and Partnerships
              </Link>
            </li>
            <li>
              <Link to="/about-us/industries-we-serve" onClick={ToggleMenu}>
                Industries We Serve
              </Link>
            </li>
          </ul>
        </li>
        <li
          className="menu-items"
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={() => handleMouseLeave("products")}
        >
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownState["products"] ? "true" : "false"}
            onClick={() => toggleDropdown("products")}
          >
            Products <span className="arrow"></span>
          </button>
          <ul className={`dropdown ${dropdownState["products"] ? "show" : ""}`}>
            <li
              onMouseEnter={() => handleMouseEnter("himalayan-salt")}
              onMouseLeave={() => handleMouseLeave("himalayan-salt")}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={
                  dropdownState["himalayan-salt"] ? "true" : "false"
                }
                onClick={() => toggleDropdown("himalayan-salt")}
              >
                Himalayan Salt <span>&raquo;</span>
              </button>
              <ul
                className={`dropdown dropdown-submenu ${
                  dropdownState["himalayan-salt"] ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    to="/products/himalayan-salt/edible-salt"
                    onClick={ToggleMenu}
                  >
                    Edible Salt
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/himalayan-salt/animal-lick-salt"
                    onClick={ToggleMenu}
                  >
                    Animal Lick Salt
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/himalayan-salt/deicing-salt"
                    onClick={ToggleMenu}
                  >
                    Deicing Salt
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("rice")}
              onMouseLeave={() => handleMouseLeave("rice")}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={dropdownState["rice"] ? "true" : "false"}
                onClick={() => toggleDropdown("rice")}
              >
                <Link
                  to="/products/rice"
                  id="special-link"
                  onClick={ToggleMenu}
                >
                  Rice
                </Link>
                <span style={{ marginRight: "70px" }}>&raquo;</span>
              </button>
              <ul
                className={`dropdown dropdown-submenu-2 ${
                  dropdownState["rice"] ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    to="/products/rice#1121-basmati-steam-white"
                    onClick={ToggleMenu}
                  >
                    1121 Basmati Steam White
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/rice#1121-basmati-sella"
                    onClick={ToggleMenu}
                  >
                    1121 Basmati Sella
                  </Link>
                </li>
                <li>
                  <Link to="/products/rice#irr9" onClick={ToggleMenu}>
                    IRR9
                  </Link>
                </li>
                <li>
                  <Link to="/products/rice#irr6" onClick={ToggleMenu}>
                    IRR6
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/products/corn" onClick={ToggleMenu}>
                Corn
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-items">
          <Link to="/contact-us" onClick={ToggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={MenuIcon}
        alt="Toggle menu"
        className="menu-icon"
        onClick={ToggleMenu}
      />
    </nav>
  );
};

export default Navbar;
