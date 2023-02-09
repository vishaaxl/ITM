import styled from "styled-components";
import Marquee from "./Marquee";

interface Props {}

const Wrapper = styled.section`
  background: ${({ theme }) => theme.secondary};
  display: grid;
  grid-template-columns: 1fr 9fr;

  @media (min-width: 900px) {
    position: relative;
    bottom: 7rem;
    z-index: 2;
    /* box-shadow: ${({ theme }) => theme.shadowPrimary}; */
  }

  .heading {
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.accent.secondary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    font-weight: 700;
    font-size: 0.7rem;

    max-width: 60px;
  }

  .main {
    padding: 1rem;
    display: grid;
    gap: 1rem;

    @media (min-width: 767px) {
      grid-template-columns: 1fr 1fr;
      padding: 2rem 1rem;
      gap: 1.5rem;
    }
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.75rem;

  .column-one {
    span {
      font-size: 0.9rem;
      display: block;
      color: ${({ theme }) => theme.light};
      font-weight: 700;
    }
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);

    @media (min-width: 425px) {
      padding: 0.75rem 2.5rem;
    }
  }

  .column-two {
    line-height: 1.4;

    span {
      font-size: 0.8rem;
      display: block;
      color: ${({ theme }) => theme.accent.primary};
      font-weight: 700;

      @media (min-width: 425px) {
        font-size: 0.9rem;
      }
    }

    .faded {
      font-weight: 500;
      padding-top: 0.35rem;
      font-size: 0.7rem;
      color: ${({ theme }) => theme.light};
    }
  }
`;

const Events: React.FC<Props> = () => {
  return (
    <>
      <div className="container-fluid">
        <Wrapper>
          <div className="heading">
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
            <span>S</span>
          </div>
          <div className="main">
            <ListItem>
              <div className="column-one">
                <span>27</span>
                <span>Feb</span>
              </div>
              <div className="column-two">
                <span>
                  Police Paathshala Organized at the Campus by our Our
                  Hon&rsquo;ble Chief guest Mr. Vipin Tada, SSP, Gorakhpur.
                </span>
                <span className="faded">27 Feb 2021 at 7:00 am</span>
              </div>
            </ListItem>
            <ListItem>
              <div className="column-one">
                <span>27</span>
                <span>Feb</span>
              </div>
              <div className="column-two">
                <span>
                  Police Paathshala Organized at the Campus by our Our
                  Hon&rsquo;ble Chief guest Mr. Vipin Tada, SSP, Gorakhpur.
                </span>
                <span className="faded">27 Feb 2021 at 7:00 am</span>
              </div>
            </ListItem>
            <ListItem>
              <div className="column-one">
                <span>27</span>
                <span>Feb</span>
              </div>
              <div className="column-two">
                <span>
                  Police Paathshala Organized at the Campus by our Our
                  Hon&rsquo;ble Chief guest Mr. Vipin Tada, SSP, Gorakhpur.
                </span>
                <span className="faded">27 Feb 2021 at 7:00 am</span>
              </div>
            </ListItem>
            <ListItem>
              <div className="column-one">
                <span>27</span>
                <span>Feb</span>
              </div>
              <div className="column-two">
                <span>
                  Police Paathshala Organized at the Campus by our Our
                  Hon&rsquo;ble Chief guest Mr. Vipin Tada, SSP, Gorakhpur.
                </span>
                <span className="faded">27 Feb 2021 at 7:00 am</span>
              </div>
            </ListItem>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Events;
