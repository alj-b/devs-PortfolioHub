import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  RightOptions
} from "./styles/Navbar.style";
import LogoImg from "./devhub-logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">
              <Logo src={LogoImg}></Logo>
            </NavbarLink>
            <RightOptions>
              <NavbarLink to="/developers"> Developers</NavbarLink>
              <NavbarLink to="/projects"> Projects</NavbarLink>
            </RightOptions>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLink to="/register"> Create profile</NavbarLink>
          <NavbarLink to="/login"> Sign in</NavbarLink>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/developers"> Developers</NavbarLinkExtended>
          <NavbarLinkExtended to="/projects"> Projects</NavbarLinkExtended>
          <NavbarLinkExtended to="/my-profile">
            {" "}
            Create profile
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/sign-in"> Sign in</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
