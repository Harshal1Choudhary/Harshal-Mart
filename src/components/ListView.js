import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card" key={id}>
              <figure>
                <img src={image?.[0]?.url} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p className="card-price">
                  <FormatPrice price={price} />
                </p>
                <p className="card-desc">{description.slice(0, 130)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button>Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    gap: 2.4rem;
  }

  .card {
    display: grid;
    grid-template-columns: 28rem 1fr;
    gap: 2.4rem;
    align-items: center;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.colors.radius};
    overflow: hidden;
    transition: box-shadow 0.25s ease, transform 0.25s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.colors.cardShadow};
    }
  }

  figure {
    height: 22rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.section_bg};
    overflow: hidden;

    img {
      max-width: 75%;
      max-height: 80%;
      object-fit: contain;
      transition: transform 0.35s ease;
    }

    &:hover img {
      transform: scale(1.06);
    }
  }

  .card-data {
    padding: 2rem 2.4rem 2rem 0;

    h3 {
      font-size: 2rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.heading};
    }

    .card-price {
      margin: 0.8rem 0 1.2rem;
      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.helper};
    }

    .card-desc {
      font-size: 1.4rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 2rem;
      max-width: 60rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .card {
      grid-template-columns: 1fr;
    }

    .card-data {
      padding: 0 2rem 2.4rem;
    }
  }
`;

export default ListView;
