import { useProductContext } from "../context/productcontex";
import styled from "styled-components";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Featured Products</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.section_bg};

  .container {
    max-width: 120rem;
  }

  .card {
    background-color: #fff;
    border-radius: ${({ theme }) => theme.colors.radius};
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.colors.cardShadow};
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    }
  }

  figure {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.section_bg};
    height: 24rem;

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
    padding: 1.8rem 2rem 2.2rem;
  }

  .card-data-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h3 {
      color: ${({ theme }) => theme.colors.heading};
      text-transform: capitalize;
      font-size: 1.7rem;
    }
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
    font-weight: 700;
    font-size: 1.7rem;
  }
`;

export default FeatureProduct;
