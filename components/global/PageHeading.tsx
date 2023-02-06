import { ReactNode } from "react";
import Breadcrumbs from "nextjs-breadcrumbs";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
  title: string;
}

const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 40vh;
  background-image: url("/images/banner.jpg");
  background-size: cover;
  background-position: center center;

  @media (min-width: 1024px) {
    height: 60vh;
  }

  .banner-heading {
    position: absolute;
    left: 50%;
    top: 70%;
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
      color: ${({ theme }) => theme.accent.secondary};
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
      rgba(0, 0, 0, 0.7) 95%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const BreadCrumbsContainer = styled.div`
  padding: 1rem 0;

  .links {
    ol {
      display: flex;
      gap: 1rem;
      li {
        a {
          color: ${({ theme }) => theme.accent.primary};
          font-weight: 500;
        }
      }
    }
  }
`;

const PageHeading: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Wrapper>
        <div className="film"></div>

        <div className="banner-heading container">
          <h1>{title}</h1>
        </div>
      </Wrapper>
      <BreadCrumbsContainer>
        <div className="container">
          <Breadcrumbs
            containerClassName="links"
            activeItemClassName="active"
            rootLabel="home"
            transformLabel={(title) => title + " /"}
          />
        </div>
      </BreadCrumbsContainer>
      {children}
    </>
  );
};

export default PageHeading;
