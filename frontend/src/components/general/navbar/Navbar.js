import React, { useState } from "react";
import useScreenSize from "../../../hooks/useScreenSize";
import {
  NavItemsWrapper,
  NavWrapper,
  LogoWrapper,
  Items,
  MobileNavWrapper
} from "./navbar.styled";
import Button from "../Button";
import LOGO from "../assests/icons/logo.svg";
import MenuBtn from "./MenuBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const { screenWidth } = useScreenSize();
  const mobile = screenWidth <= 690;
  const tablet = screenWidth <= 1024;

  /*!IMPORTANT-
This may not be the best way to effect this...in case it slows down page, 
implementation should be changed
*/

  //get all anchor tags in .nav--link--items
  const navLinks = document.querySelectorAll(".nav--link--items > a");
  const navLogo = document.querySelector(".nav--logo");
  const removeClass = (items) => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };
  //loop through links
  navLinks.forEach((link) => {
    //add a click listener to each
    link.addEventListener("click", (e) => {
      //onclick
      removeClass(navLinks);
      e.currentTarget.classList.add("active");
    });
  });

  navLogo?.addEventListener("click", () => removeClass(navLinks));

  return (
    /* Link currently does not have a route
    
    this should be implemented when the routes are confirmed*/

    <NavWrapper tablet={tablet} mobile={mobile}>
      <NavItemsWrapper>
        <Items className="nav--logo">
          <Link>
            <LogoWrapper mobile={mobile} tablet={tablet}>
              <img src={LOGO} alt="axeapi logo" />
            </LogoWrapper>
          </Link>
        </Items>
        {tablet && (
          /* on click of the menu_btn on tablet & mobile toggle menu*/
          <Items onClick={() => setMenuOpen(!menuopen)}>
            {/*changes color of component if menu is open*/}
            <MenuBtn menuopen={menuopen} />
          </Items>
        )}
        <Items className="nav--link--items" tablet={tablet}>
          <Link>Products</Link>
          <Link>Resourses</Link>
          <Link>About Us</Link>
        </Items>
        <Items className="nav--link--items" tablet={tablet}>
          <Link>Log in</Link>
          <Link>
            {/* this a reusable button component */}
            <Button
              style={{ padding: "12px 24px", fontWeight: "700" }}
              text="Get Started"
            />
          </Link>
        </Items>
      </NavItemsWrapper>
      {tablet && (
        /* display on tablet screen size */
        <MobileNavWrapper
          tablet={tablet}
          mobile={mobile}
          className={`${menuopen && "open"} nav--link--items`}>
          <Link>Products</Link>
          <Link>Resourses</Link>
          <Link>About Us</Link>
          <Link>Log in</Link>
          <Link>Get Started</Link>
        </MobileNavWrapper>
      )}
    </NavWrapper>
  );
};

export default Navbar;
