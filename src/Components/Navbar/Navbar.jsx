import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/clapperboard.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavBarContainer>
      <Link style={{ textDecoration: "none" }} to="/" className="navigate_logo">
        <Logo>
          <img src={logo} alt="logo" />
          <span>Entertain.</span>
        </Logo>
      </Link>
      <Link to="/search">
        <Search
          type="text"
          placeholder="Search"
          onKeyUp={(e) => {
            console.log(e.target.value);
          }}
        />
      </Link>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--dark-blue);
  height: 70px;
  padding: 0 6rem;
`;

const Logo = styled.div`
  img {
    height: 24px;
  }

  span {
    font-size: 1.5rem;
    color: rgb(224, 224, 224);
    font-weight: 600;
    font-style: normal;
    margin-left: 5px;
  }
`;

const Search = styled.input`
  padding: 0.5rem 0.7rem;
  width: 250px;
  background-color: #2b2d35;
  border: transparent;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

export default Navbar;
