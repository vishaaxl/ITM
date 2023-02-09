import styled from "styled-components";

interface Props {}

const HeroWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 80vh;
  background-image: url("/images/banner.jpg");
  background-size: cover;
  position: relative;

  @media (min-width: 767px) {
    height: 50vh;
  }

  @media (min-width: 1024px) {
    height: 100vh;
  }

  .banner-heading {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    z-index: 2;

    h1 {
      font-size: 1.85rem;
      text-align: center;
      font-weight: 800;
      color: ${({ theme }) => theme.secondary};
      text-shadow: ${({ theme }) => theme.shadowPrimary};

      @media (min-width: 425px) {
        font-size: 2.5rem;
      }

      @media (min-width: 900px) {
        font-size: 3rem;
      }
    }

    display: flex;
    flex-direction: column;

    span {
      padding-top: 1rem;
      cursor: pointer;
      text-align: center;
      color: ${({ theme }) => theme.accent.tertiary};
      text-decoration: underline;
    }
  }

  .film {
    z-index: 1;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      0deg,
      rgba(25, 255, 255, 0.01) 0%,
      rgba(0, 128, 255, 0.2) 100%
    );
  }
`;

const Hero: React.FC<Props> = () => {
  return (
    <>
      <HeroWrapper>
        <div className="film"></div>

        <div className="banner-heading container">
          <h1>Welcome to INSTITUTE OF TECHNOLOGY AND MANAGEMENT</h1>
          <span>Know more</span>
        </div>
      </HeroWrapper>
    </>
  );
};

export default Hero;
