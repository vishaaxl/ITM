import styled from "styled-components";

interface Props {}
interface BackgroundProps {
  dark: boolean;
}

const Wrapper = styled.div`
  padding: 3rem 0;

  .heading {
    font-weight: 700;
    text-align: center;
    font-size: 1.75rem;

    @media (min-width: 425px) {
      font-size: 2.125em;
      margin-bottom: 0.5rem;
    }

    @media (min-width: 767px) {
      font-size: 2.75em;
      margin-bottom: 2rem;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ListItem = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  display: grid;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 767px) {
    grid-template-columns: 1fr 9fr;
    padding: 2rem 0;

    &:nth-child(odd) {
      /* grid-auto-flow: dense;
      direction: rtl; */
      padding-left: 10%;
    }
  }

  .column-one {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.accent.secondary};

    @media (min-width: 767px) {
      font-size: 4rem;
    }
  }

  .column-two {
    h3 {
      font-size: 1.25rem;
      font-weight: 700;

      @media (min-width: 425px) {
        font-size: 1.75rem;
      }

      @media (min-width: 767px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 0.9rem;
      padding-top: 1rem;
      opacity: 0.85;

      @media (min-width: 767px) {
        max-width: 80%;
      }
    }
  }
`;

export const Background = styled.section<BackgroundProps>`
  background: ${({ theme, dark }) =>
    dark ? theme.accent.primary : theme.lightbg};
  color: ${({ theme }) => theme.secondary};
`;

export const Button = styled.div`
  background: ${({ theme }) => theme.accent.secondary};
  color: ${({ theme }) => theme.secondary};
  /* box-shadow: ${({ theme }) => theme.shadowPrimary}; */
  font-weight: 600;
  font-size: 0.9rem;

  padding: 0.85em 2.75em;
  border-radius: 2px;
  max-width: fit-content;

  cursor: pointer;

  @media (min-width: 767px) {
    padding: 1em 3em;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #333333;
  }
`;

const Admission: React.FC<Props> = () => {
  return (
    <Background dark>
      <div className="container">
        <Wrapper>
          <h2 className="heading">Easy Steps to Apply</h2>
          <ListItem>
            <div className="column-one">01</div>
            <div className="column-two">
              <h3>Complete Application Form</h3>
              <p>
                Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros
                volutpat aliquet eu diam gravida class tellus justo finibus
                facilisis. In taciti augue nascetur dictumst diam dapibus nam
                lobortis.
              </p>
            </div>
          </ListItem>
          <ListItem>
            <div className="column-one">02</div>
            <div className="column-two">
              <h3>Choose your program</h3>
              <p>
                Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros
                volutpat aliquet eu diam gravida class tellus justo finibus
                facilisis. In taciti augue nascetur dictumst diam dapibus nam
                lobortis.
              </p>
            </div>
          </ListItem>

          <ListItem>
            <div className="column-one">03</div>
            <div className="column-two">
              <h3>
                Additional information about yourself or your circumstances
              </h3>
              <p>
                Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros
                volutpat aliquet eu diam gravida class tellus justo finibus
                facilisis. In taciti augue nascetur dictumst diam dapibus nam
                lobortis.
              </p>
            </div>
          </ListItem>
          <ListItem>
            <div className="column-one">04</div>
            <div className="column-two">
              <h3>Payment of Fees</h3>
              <p>
                Quis hendrerit molestie orci ipsum ullamcorper. Ultrices eros
                volutpat aliquet eu diam gravida class tellus justo finibus
                facilisis. In taciti augue nascetur dictumst diam dapibus nam
                lobortis.
              </p>
            </div>
          </ListItem>
          <div className="button-wrapper">
            <Button>Application Form</Button>
          </div>
        </Wrapper>
      </div>
    </Background>
  );
};

export default Admission;
