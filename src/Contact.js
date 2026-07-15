import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { FiMail, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Your Formspree form id (formspree.io dashboard -> the part after /f/).
const FORMSPREE_ID = "mpqvqrqz";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <Wrapper>
      <div className="container">
        <header className="contact-header">
          <p className="intro-data">Get in touch</p>
          <h1>Contact us</h1>
          <p className="lead">
            Questions about an order, a product, or a partnership? Send a
            message and we'll get back within one business day.
          </p>
        </header>

        <div className="contact-grid">
          {/* left: details */}
          <aside className="contact-info">
            <div className="info-item">
              <span className="info-icon">
                <FiMail />
              </span>
              <div>
                <h4>Email</h4>
                <p>support@harshalmart.com</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FiMapPin />
              </span>
              <div>
                <h4>Location</h4>
                <p>Vijay Nagar, Indore, Madhya Pradesh 452010</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FiClock />
              </span>
              <div>
                <h4>Working hours</h4>
                <p>Mon – Sat, 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="socials">
              <a href="https://github.com/Harshal1Choudhary" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/Harshal-choudhary-615968170" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </aside>

          {/* right: form */}
          <div className="contact-card">
            {state.succeeded ? (
              <div className="form-success">
                <FiCheckCircle className="success-icon" />
                <h3>Message sent</h3>
                <p>Thanks for reaching out — we'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="field">
                  <label htmlFor="username">Name</label>
                  <input
                    id="username"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    defaultValue={isAuthenticated ? user.name : ""}
                    required
                    autoComplete="name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    defaultValue={isAuthenticated ? user.email : ""}
                    required
                    autoComplete="email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="How can we help?"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button type="submit" className="submit-btn" disabled={state.submitting}>
                  {state.submitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map-wrap">
          <iframe
            title="Harshal Mart location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.55272645348!2d75.89098688008471!3d22.74530238087099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1695627801634!5m2!1sen!2sin"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0 8rem;

  .contact-header {
    max-width: 60rem;
    margin-bottom: 4rem;

    h1 {
      font-size: 3.6rem;
      margin: 0.4rem 0 1.2rem;
    }

    .lead {
      font-size: 1.6rem;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 32rem 1fr;
    gap: 3.2rem;
    align-items: start;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1.4rem;

      .info-icon {
        display: grid;
        place-items: center;
        min-width: 4.4rem;
        height: 4.4rem;
        border-radius: 1.2rem;
        background: ${({ theme }) => theme.colors.gradient};
        color: #fff;
        font-size: 1.9rem;
      }

      h4 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.heading};
        margin-bottom: 0.3rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 1.5;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .socials {
      display: flex;
      gap: 1.2rem;
      margin-top: 0.8rem;

      a {
        display: grid;
        place-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.heading};
        font-size: 1.6rem;
        transition: all 0.2s ease;

        &:hover {
          background: ${({ theme }) => theme.colors.helper};
          border-color: ${({ theme }) => theme.colors.helper};
          color: #fff;
          transform: translateY(-2px);
        }
      }
    }
  }

  .contact-card {
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.colors.radius};
    box-shadow: ${({ theme }) => theme.colors.cardShadow};
    padding: 3.2rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      label {
        font-size: 1.4rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.heading};
      }

      input,
      textarea {
        width: 100%;
        padding: 1.1rem 1.4rem;
        font-size: 1.5rem;
        font-family: inherit;
        resize: vertical;
      }
    }

    .submit-btn {
      align-self: flex-start;
      margin-top: 0.4rem;
      padding: 1.2rem 3.2rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      background: ${({ theme }) => theme.colors.gradient};
      box-shadow: 0 8px 20px rgba(98, 84, 243, 0.28);
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 26px rgba(98, 84, 243, 0.34);
      }

      &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
        transform: none;
      }
    }
  }

  [class*="ValidationError"],
  .field > p {
    font-size: 1.3rem;
    color: #e5484d;
    margin: 0;
  }

  .form-success {
    text-align: center;
    padding: 2.4rem 1rem;

    .success-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.helper};
      margin-bottom: 1.2rem;
    }

    h3 {
      font-size: 2.1rem;
      color: ${({ theme }) => theme.colors.heading};
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .map-wrap {
    margin-top: 4rem;
    border-radius: ${({ theme }) => theme.colors.radius};
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.border};
    line-height: 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
    .contact-card {
      padding: 2.4rem;
    }
  }
`;

export default Contact;
