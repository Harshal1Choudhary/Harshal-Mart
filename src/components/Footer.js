import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to start shopping?</h3>
            <p>Browse the catalog and find something you'll love today.</p>
          </div>

          <div>
            <NavLink to="/products">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Harshal Mart</h3>
            <p>
              A modern storefront built with React — fast delivery, secure
              checkout, and a catalog you'll enjoy browsing.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Get product updates</h3>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <input type="email" name="email" placeholder="Your e-mail" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <p>+91 12345 67897</p>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>© {new Date().getFullYear()} Harshal Mart. All Rights Reserved.</p>
            <div className="footer-legal">
              <p>Privacy Policy</p>
              <p>Terms &amp; Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 70rem;
    margin: auto;
    padding: 4rem 5rem;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 2rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    position: relative;
    z-index: 2;

    h3 {
      color: #fff;
      font-size: 2.2rem;
    }
    p {
      color: rgba(255, 255, 255, 0.85);
      margin-top: 0.6rem;
    }

    .grid {
      align-items: center;
      gap: 3rem;
    }

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 16rem 0 6rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: #fff;
      margin-bottom: 2rem;
      font-size: 1.9rem;
    }
    p {
      color: rgba(255, 255, 255, 0.72);
      font-size: 1.5rem;
      line-height: 1.6;
    }

    input[type="email"] {
      max-width: 24rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 1.4rem;

      div {
        display: grid;
        place-items: center;
        width: 4.4rem;
        height: 4.4rem;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.25);
        transition: background-color 0.2s ease, border-color 0.2s ease;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.helper};
          border-color: ${({ theme }) => theme.colors.helper};
        }

        .icons {
          color: #fff;
          font-size: 2.1rem;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 6rem;

    hr {
      margin-bottom: 2.4rem;
      border: none;
      height: 1px;
      background: rgba(255, 255, 255, 0.14);
    }

    .footer-legal {
      display: flex;
      gap: 2.4rem;
      justify-self: end;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 85vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      padding: 3.2rem;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 6rem 0;
    }

    .footer-bottom--section {
      padding-top: 4rem;

      .footer-legal {
        justify-self: start;
      }
    }
  }
`;

export default Footer;
