import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0 9rem;
  background-color: ${({ theme }) => theme.colors.section_bg};

  h3 {
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  img {
    max-height: 5rem;
    width: auto;
    filter: grayscale(100%);
    opacity: 0.55;
    transition: filter 0.2s ease, opacity 0.2s ease;

    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  .brand-section-slider {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
