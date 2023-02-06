import styled from "styled-components";
import { HiMail, HiPhone } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

interface Props {}

const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  font-weight: 500;
  padding: 3rem 0 1rem 0;

  .row {
    margin-bottom: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .row-heading {
      font-size: 1.2rem;
      font-weight: 700;

      @media (min-width: 425px) {
        font-size: 1.75rem;
      }
    }

    .faded {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-bottom: 1rem;
      font-weight: 400;
    }
  }

  .container {
    @media (min-width: 767px) {
      display: grid;
      /* grid-template-columns: 1fr 3fr; */
    }
  }
`;

const Line = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  font-size: 0.9rem;

  @media (min-width: 425px) {
    font-size: 1rem;
  }

  .icon {
    color: ${({ theme }) => theme.accent.secondary};
  }
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Copyright = styled.div`
  padding-top: 1.275rem;
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer: React.FC<Props> = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row">
          <span className="row-heading">
            INSTITUTE OF TECHNOLOGY AND MANAGEMENT
          </span>
          <span className="faded">
            Approved by AICTE, PCI, New Delhi affiliated by A.K.T.U Lucknow
          </span>

          <span>AL-1, Sector 7, Gida</span>
          <span>Gorakhpur - 273209</span>
          <Line>
            <HiMail className="icon" />
            <span>director@itmgkp.edu.in</span>
          </Line>
          <Line>
            <HiPhone className="icon" />
            <span>+91-8081209500</span>
          </Line>
        </div>
        <ColumnWrapper>
          <div className="row">
            <span className="row-heading">Quick Links</span>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Home</span>
            </Line>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Academics Overview</span>
            </Line>

            <Line>
              <HiArrowUpRight className="icon" />
              <span>Admission Overview</span>
            </Line>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Programmes Offered</span>
            </Line>

            <Line>
              <HiArrowUpRight className="icon" />
              <span>Photo Gallery</span>
            </Line>
          </div>
          <div className="row">
            <span className="row-heading">About</span>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Academics</span>
            </Line>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Faculty</span>
            </Line>

            <Line>
              <HiArrowUpRight className="icon" />
              <span>Misson and Vision</span>
            </Line>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Director&rsquo;s Desk</span>
            </Line>

            <Line>
              <HiArrowUpRight className="icon" />
              <span>Contact us</span>
            </Line>
          </div>
          <div className="row">
            <span className="row-heading">Socials</span>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Facebook</span>
            </Line>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Twitter</span>
            </Line>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Instagram</span>
            </Line>

            <Line>
              <HiArrowUpRight className="icon" />
              <span>Linkedin</span>
            </Line>
            <Line>
              <HiArrowUpRight className="icon" />
              <span>Youtube</span>
            </Line>
          </div>
        </ColumnWrapper>
      </div>
      <Copyright>
        Copyright © 2022 ITM, GIDA, Gorakhpur, All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
