import styled from "styled-components";
import { Button } from "./Admission";

interface Props {}

const Wrapper = styled.section`
  position: relative;
  padding: 3rem 0;
  text-align: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M461.46 589.73C639.29 551.56 716.38 88.97 987.35 87.01 1258.32 85.05 1368.75 322.17 1513.24 327.81' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M439.33 580.36C590.86 565.51 659.41 260.4 946.81 243.61 1234.2 226.82 1317.3 40.35 1454.28 36.41' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M987.15 573.53C1109.23 548.12 1134.9 251.66 1350.37 231.69 1565.84 211.72 1617.26 104.78 1713.59 102.89' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M277.24 578.94C465.38 565.52 597.99 200.93 929.6 199.95 1261.21 198.97 1415.16 339.17 1581.96 339.95' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M697.62 567.5C793.52 538.57 724.78 288.77 960.84 265.42 1196.9 242.07 1344.32 46.01 1487.27 41.42' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: bottom right;

  @media (min-width: 425px) {
    padding: 5rem 0;
    background-position: center center;
  }

  & > * {
    margin: 0 auto;
    width: 80%;
    max-width: 700px;

    @media (min-width: 425px) {
      width: 70%;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    @media (min-width: 425px) {
      font-size: 2.175rem;
      font-weight: 800;
    }
  }

  p {
    color: ${({ theme }) => theme.light};
    font-size: 0.9rem;
    margin-bottom: 2rem;

    @media (min-width: 425px) {
      font-size: 1rem;
    }
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;

const Apply: React.FC<Props> = () => {
  return (
    <Wrapper>
      <h2>Are you ready to take the next step toward your future career?</h2>
      <p>
        Excellence in education to produce competent technical professionals to
        meet the need of industry and society.
      </p>
      <div className="button-container">
        <Button>Apply Now</Button>
      </div>
    </Wrapper>
  );
};

export default Apply;
