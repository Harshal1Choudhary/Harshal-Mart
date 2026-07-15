import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const services = [
  {
    icon: <TbTruckDelivery className="icon" />,
    title: "Fast & Free Delivery",
    text: "Free shipping on every order, delivered in days.",
  },
  {
    icon: <MdSecurity className="icon" />,
    title: "Non-contact Shipping",
    text: "Safe, contactless delivery right to your door.",
  },
  {
    icon: <GiReceiveMoney className="icon" />,
    title: "Money-back Guarantee",
    text: "Not satisfied? Get a full refund, no questions asked.",
  },
  {
    icon: <RiSecurePaymentLine className="icon" />,
    title: "Secure Payments",
    text: "Your data is protected with encrypted checkout.",
  },
];

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
  }

  .service-card {
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.colors.radius};
    padding: 3rem 2.4rem;
    text-align: left;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: ${({ theme }) => theme.colors.cardShadow};
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
      color: ${({ theme }) => theme.colors.heading};
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.5;
    }
  }

  .icon-wrap {
    display: grid;
    place-items: center;
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 1.4rem;
    margin-bottom: 1.8rem;
    background: rgba(98, 84, 243, 0.1);

    .icon {
      width: 3rem;
      height: 3rem;
      color: ${({ theme }) => theme.colors.helper};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
