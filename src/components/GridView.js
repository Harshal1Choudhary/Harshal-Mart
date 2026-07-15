import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  .card {
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.colors.radius};
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: ${({ theme }) => theme.colors.cardShadow};
    }
  }

  figure {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.section_bg};
    height: 22rem;

    img {
      max-width: 80%;
      max-height: 80%;
      object-fit: contain;
      transition: transform 0.35s ease;
    }

    &:hover img {
      transform: scale(1.06);
    }
  }

  .card-data {
    padding: 1.6rem 1.8rem 2rem;
  }

  .card-data-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h3 {
      color: ${({ theme }) => theme.colors.heading};
      text-transform: capitalize;
      font-size: 1.6rem;
    }
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
    font-weight: 700;
    font-size: 1.6rem;
  }
`;

export default GridView;
