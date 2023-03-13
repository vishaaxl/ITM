import styled from "styled-components";
import { HiMail, HiPhone } from "react-icons/hi";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const TopNav = styled.nav`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.secondary};
  padding: 1.25em 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .container,
  .section-two,
  ul {
    display: flex;
    gap: 1.35rem;
    justify-content: space-between;

    font-weight: 600;
    font-size: 0.85rem;

    .link {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.accent.secondary};
      }
    }
  }

  .section-one {
    display: none;
    @media (min-width: 900px) {
      display: block;
    }
  }

  .section-three {
    display: none;

    @media (min-width: 600px) {
      display: block;
    }

    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent.secondary};
  }
`;

const TopNavElement = () => {
  return (
    <TopNav>
      <div className="container">
        <div className="section-one">
          <ul className="links">
            <li className="link">Student Life</li>
            <li className="link">Alumni</li>
            <li className="link">Payment</li>
            <Socials />
          </ul>
        </div>
        <div className="section-two">
          <Line>
            <HiMail className="icon" />
            <span>director@itmgkp.edu.in</span>
          </Line>
          <Line>
            <HiPhone className="icon" />
            <span>+91-8081209500</span>
          </Line>
        </div>
        <div className="section-three">
          {" "}
          <Socials />{" "}
        </div>
      </div>
    </TopNav>
  );
};

const IconsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 1.125rem;

  & > * {
    cursor: pointer;
  }
`;

const Socials = () => {
  return (
    <IconsContainer>
      <AiOutlineTwitter />
      <AiFillFacebook />
      <AiFillLinkedin />
      <AiFillInstagram />
    </IconsContainer>
  );
};

export default TopNavElement;
