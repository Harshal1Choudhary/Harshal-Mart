import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiArrowRight, FiTruck } from "react-icons/fi";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to {name}</p>
            <h1>
              Everything you love, <span>delivered fast.</span>
            </h1>
            <p className="hero-para">
              Discover a curated collection of quality products at prices you'll
              love. Shop the latest arrivals, compare with ease, and check out
              in seconds.
            </p>

            <div className="hero-actions">
              <NavLink to="/products">
                <Button>
                  Shop Now <FiArrowRight />
                </Button>
              </NavLink>
              <NavLink to="/about" className="ghost-btn">
                Learn more
              </NavLink>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h4>10k+</h4>
                <p>Products</p>
              </div>
              <div className="stat">
                <h4>50k+</h4>
                <p>Happy customers</p>
              </div>
              <div className="stat">
                <h4>4.9</h4>
                <p>Average rating</p>
              </div>
            </div>
          </div>

          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="Featured products"
                className="img-style"
              />
              <div className="floating-badge">
                <span className="badge-icon">
                  <FiTruck />
                </span>
                <div>
                  <strong>Free shipping</strong>
                  <p>On all orders</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0 6rem;
  background: linear-gradient(180deg, #f6f7fb 0%, #ffffff 100%);

  .hero-section-data {
    .intro-data {
      margin-bottom: 1.6rem;
    }

    h1 {
      font-size: 5.6rem;
      line-height: 1.08;

      span {
        color: ${({ theme }) => theme.colors.helper};
      }
    }

    .hero-para {
      margin: 2.4rem 0 3.2rem;
      max-width: 48rem;
      font-size: 1.7rem;
    }
  }

  .hero-actions {
    display: flex;
    align-items: center;
    gap: 2rem;

    svg {
      margin-left: 0.6rem;
      vertical-align: middle;
    }

    .ghost-btn {
      font-size: 1.6rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.heading};
      border-bottom: 2px solid ${({ theme }) => theme.colors.border};
      padding-bottom: 0.3rem;
      transition: color 0.2s ease, border-color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.helper};
        border-color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .hero-stats {
    display: flex;
    gap: 4rem;
    margin-top: 4.8rem;

    .stat {
      h4 {
        font-size: 2.8rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.heading};
      }
      p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  .hero-section-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;
    width: 100%;

    &::after {
      content: "";
      width: 85%;
      height: 90%;
      background: ${({ theme }) => theme.colors.gradient};
      opacity: 0.16;
      border-radius: 3rem;
      position: absolute;
      right: -3%;
      top: -3rem;
      z-index: 0;
    }
  }

  .img-style {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    border-radius: 2.4rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  }

  .floating-badge {
    position: absolute;
    z-index: 2;
    bottom: 2.4rem;
    left: -2rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    background: #fff;
    padding: 1.4rem 1.8rem;
    border-radius: 1.4rem;
    box-shadow: ${({ theme }) => theme.colors.cardShadow};

    .badge-icon {
      display: grid;
      place-items: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.helper};
      color: #fff;
      font-size: 1.9rem;
    }

    strong {
      display: block;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.heading};
    }
    p {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 4rem 0;

    .hero-section-data h1 {
      font-size: 4rem;
    }

    .hero-stats {
      gap: 2.4rem;
      margin-top: 3.2rem;
    }

    .hero-section-image {
      margin-top: 4rem;
    }

    .floating-badge {
      left: 1rem;
    }
  }
`;

export default HeroSection;
