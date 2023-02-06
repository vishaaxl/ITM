import styled from "styled-components";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

// local
import { AccentLine } from "@/utils/global";
interface Props {}

const Wrapper = styled.div`
  padding: 3rem 0;

  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 2rem;
      font-weight: 800;

      .accent {
        color: ${({ theme }) => theme.accent.primary};
      }
    }
  }

  .column {
    .column-heading {
      background-color: ${({ theme }) => theme.accent.primary};
      color: ${({ theme }) => theme.secondary};
      font-size: 1.25rem;
      padding: 0.75rem;
      text-align: center;
      margin: 1rem 0;
    }

    ul {
      li {
        display: flex;
        gap: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.075);

        max-width: 80%;
        margin: 0 auto 0.75rem auto;

        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.accent.tertiary};
        }

        .icon {
          margin-top: 0.215rem;
          font-size: 1rem;
        }

        &:not(:first-child) {
          transform: translateX(40px);
        }
      }
    }
  }
`;

const ColumnWrapper = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Notices: React.FC<Props> = () => {
  return (
    <div className="container">
      <Wrapper>
        <div className="heading">
          <h2>
            <span className="accent">ADMISSONS</span> ZONE
          </h2>
          <AccentLine />
        </div>

        <ColumnWrapper>
          <div className="column column-one">
            <div className="column-heading">UG Admissions 2022-2023</div>
            <ul>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Orientation & Registration of 2022 Entry UG students
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Reporting of the students in the respective hostels - 27th
                  Oct. 2022
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Orientation & Registration of 2022 Entry UG students
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Reporting of the students in the respective hostels - 27th
                  Oct. 2022
                </span>
              </li>
            </ul>
          </div>
          <div className="column column-two">
            <div className="column-heading">PG Admissions 2022-2023</div>
            <ul>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Orientation & Registration of 2022 Entry UG students
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Reporting of the students in the respective hostels - 27th
                  Oct. 2022
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Orientation & Registration of 2022 Entry UG students
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Reporting of the students in the respective hostels - 27th
                  Oct. 2022
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Orientation & Registration of 2022 Entry UG students
                </span>
              </li>
              <li>
                <BsFillCalendar2CheckFill className="icon" />
                <span>
                  Reporting of the students in the respective hostels - 27th
                  Oct. 2022
                </span>
              </li>
            </ul>
          </div>
        </ColumnWrapper>
      </Wrapper>
    </div>
  );
};

export default Notices;
