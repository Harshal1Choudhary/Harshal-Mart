import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiShoppingBag, FiHeart, FiTruck } from "react-icons/fi";
import { Button } from "./styles/Button";

const values = [
  {
    icon: <FiShoppingBag />,
    title: "Quality First",
    text: "Every product is hand-picked and vetted so you shop with confidence.",
  },
  {
    icon: <FiHeart />,
    title: "Customer Obsessed",
    text: "Friendly support and a hassle-free return policy on every order.",
  },
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    text: "Reliable, free shipping that gets your order to you in days.",
  },
];

const About = () => {
  return (
    <Wrapper>
      <section className="about-hero">
        <div className="container">
          <p className="intro-data">Our Story</p>
          <h1>Shopping, reimagined for everyone.</h1>
          <p className="lead">
            Harshal Mart started with one simple idea — make online shopping
            fast, honest, and genuinely enjoyable. Today we bring a curated
            catalog of quality products to thousands of happy customers.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div className="container stats-grid">
          <div className="stat">
            <h2>5+</h2>
            <p>Years running</p>
          </div>
          <div className="stat">
            <h2>10k+</h2>
            <p>Products listed</p>
          </div>
          <div className="stat">
            <h2>50k+</h2>
            <p>Happy customers</p>
          </div>
          <div className="stat">
            <h2>4.9</h2>
            <p>Average rating</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <p className="intro-data">Why choose us</p>
          <h2 className="section-title">What we stand for</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container cta-inner">
          <div>
            <h2>Ready to find something you love?</h2>
            <p>Browse the full catalog and check out in seconds.</p>
          </div>
          <NavLink to="/products">
            <Button>Shop the store</Button>
          </NavLink>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .about-hero {
    padding: 8rem 0 5rem;
    background: linear-gradient(180deg, #f6f7fb 0%, #ffffff 100%);
    text-align: center;

    h1 {
      font-size: 5rem;
      max-width: 68rem;
      margin: 1.6rem auto 0;
    }

    .lead {
      max-width: 60rem;
      margin: 2.4rem auto 0;
      font-size: 1.8rem;
    }
  }

  .about-stats {
    padding: 5rem 0;

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.4rem;
    }

    .stat {
      text-align: center;
      padding: 3rem 2rem;
      background: #fff;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.colors.radius};

      h2 {
        font-size: 3.6rem;
        color: ${({ theme }) => theme.colors.helper};
      }
      p {
        margin-top: 0.6rem;
        font-size: 1.5rem;
      }
    }
  }

  .about-values {
    padding: 5rem 0 7rem;

    .section-title {
      font-size: 3.2rem;
      margin-bottom: 4rem;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;
    }

    .value-card {
      background: #fff;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.colors.radius};
      padding: 3.2rem 2.8rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: ${({ theme }) => theme.colors.cardShadow};
      }

      .value-icon {
        display: grid;
        place-items: center;
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 1.4rem;
        margin-bottom: 1.8rem;
        background: rgba(98, 84, 243, 0.1);
        color: ${({ theme }) => theme.colors.helper};
        font-size: 2.6rem;
      }

      h3 {
        font-size: 1.9rem;
        margin-bottom: 0.8rem;
      }
      p {
        font-size: 1.5rem;
        line-height: 1.6;
      }
    }
  }

  .about-cta {
    padding: 0 0 8rem;

    .cta-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      background: ${({ theme }) => theme.colors.gradient};
      border-radius: 2.4rem;
      padding: 4.5rem 5rem;

      h2 {
        color: #fff;
        font-size: 2.6rem;
      }
      p {
        color: rgba(255, 255, 255, 0.88);
        margin-top: 0.8rem;
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .about-stats .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .about-values .values-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .about-hero h1 {
      font-size: 3.6rem;
    }
    .about-cta .cta-inner {
      flex-direction: column;
      text-align: center;
      padding: 3.2rem;
    }
  }
`;

export default About;
