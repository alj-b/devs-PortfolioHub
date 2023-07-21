import React, { useState, useEffect } from "react";
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
import LogoImg from "./logo4.png";
import { getCurrentUser } from "../../api/users.api";
import { getToken, destroyToken } from "../../helpers/helpers.js";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [activeUser, setActiveUser] = useState(false);

  const userToken = getToken();

  useEffect(() => {
    getCurrentUser(userToken)
      .then((response) => setActiveUser(response.data))
      .catch(e => setActiveUser(false));
  }, []);

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
          {!activeUser &&
            <NavbarLink to="/register"> Create profile</NavbarLink>
          }
          {!activeUser &&
            <NavbarLink to="/login"> Sign in</NavbarLink>
          }
          {activeUser &&
            <NavbarLink to="/profile"> Profile</NavbarLink>
          }
          {activeUser &&
            <NavbarLink onClick={() => {
              destroyToken();
              window.location = "/";
            }}> Sign out</NavbarLink>
          }
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
