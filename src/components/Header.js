import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="brand">
        <span className="brand-icon">
          <FiShoppingBag />
        </span>
        <span className="brand-text">
          Harshal<span>Mart</span>
        </span>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;

  .brand {
    display: flex;
    align-items: center;
    gap: 1.1rem;
  }

  .brand-icon {
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 1.2rem;
    background: ${({ theme }) => theme.colors.gradient};
    color: #fff;
    font-size: 2rem;
    box-shadow: 0 6px 16px rgba(98, 84, 243, 0.3);
  }

  .brand-text {
    font-family: "Sora", sans-serif;
    font-weight: 800;
    font-size: 2.2rem;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.heading};

    span {
      color: ${({ theme }) => theme.colors.helper};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;

    .brand-text {
      font-size: 1.9rem;
    }
    .brand-icon {
      width: 3.4rem;
      height: 3.4rem;
      font-size: 1.7rem;
    }
  }
`;
export default Header;
