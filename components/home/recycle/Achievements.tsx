import styled from "styled-components";

// local
import { AccentLine } from "@/utils/global";

interface Props {}

const Wrapper = styled.section`
  position: relative;
  padding: 4rem 0;
  background-image: url("/images/achivement_bg.jpg");
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  .film {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .container {
    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 2rem;
    }
  }

  .heading {
    margin-bottom: 1rem;
    font-size: 3.125rem;
    font-weight: 700;
    line-height: 1;

    @media (min-width: 425px) {
      font-size: 5rem;
    }
    color: ${({ theme }) => theme.secondary};

    .accent {
      color: ${({ theme }) => theme.accent.secondary};
    }
  }

  .content {
    padding-bottom: 1rem;
    p {
      @media (min-width: 768px) {
        width: 90%;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.secondary};
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: justify;
    text-justify: inter-word;

    font-size: 0.9rem;

    @media (min-width: 767px) {
      font-size: 1rem;
    }
  }
`;

const Achievements: React.FC<Props> = () => {
  return (
    <Wrapper>
      <div className="film" />
      <div className="container">
        <div className="column-one">
          <h2 className="heading">
            <span>Our</span>
            <br /> <span className="accent">Achievements</span>
            <AccentLine />
          </h2>
          <div className="content">
            <p>
              The Institute has emerged over the years as a leading centre of
              education in the field of Engineering, Pharmacy and Management.
              The Institute is credited with well equipped labs and other
              infrastructure facilities such as language lab, computerized
              library , conference & seminar halls and hostel & residential
              facilities within the campus.
            </p>
          </div>
        </div>
        <div className="column-two">
          <p>
            Placements in 30+ companies in academic session 2019-20 More than
            95% Students in Diploma & 90% students in B. Tech. course placed in
            academic session 2018-19, 100% placements in some of branches in
            Polytechnic & B. Tech. courses.
          </p>
          <br />
          <p>
            Placements in Wipro Ltd., Tata Consultancy Service (TCS), Expedien
            eSolutions, Recom Infotech Pvt. Ltd., Focus Academy of Career
            Enhancement, Technosys Services Pvt Ltd, Shriram Transport Finance
            Company Ltd., O Source Pvt.Ltd, Source Soft Solutions, Macleods
            Pharmaceuticals Ltd., Pacific BPO Pvt. Ltd., Advik Digital
            Solutions, VK Soft Pvt. Ltd., Pie Infocom, Genpact, uCertify, Chreso
            Services Pvt. Ltd., Net2Source Inc., C-Core India Technosolution
            Pvt. Ltd.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Achievements;
