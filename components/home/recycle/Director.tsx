import Image from "next/image";
import styled from "styled-components";

interface Props {}

const Wrapper = styled.div`
  overflow: hidden;
  padding: 3rem 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M461.46 589.73C639.29 551.56 716.38 88.97 987.35 87.01 1258.32 85.05 1368.75 322.17 1513.24 327.81' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M439.33 580.36C590.86 565.51 659.41 260.4 946.81 243.61 1234.2 226.82 1317.3 40.35 1454.28 36.41' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M987.15 573.53C1109.23 548.12 1134.9 251.66 1350.37 231.69 1565.84 211.72 1617.26 104.78 1713.59 102.89' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M277.24 578.94C465.38 565.52 597.99 200.93 929.6 199.95 1261.21 198.97 1415.16 339.17 1581.96 339.95' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M697.62 567.5C793.52 538.57 724.78 288.77 960.84 265.42 1196.9 242.07 1344.32 46.01 1487.27 41.42' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: bottom right;

  @media (min-width: 425px) {
    background-position: center center;
  }

  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 2rem;
  }

  .heading {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.accent.primary};

    .accent {
      color: ${({ theme }) => theme.accent.secondary};
    }
  }

  .content {
    p {
      color: ${({ theme }) => theme.light};
      line-height: 1.6;
      margin-bottom: 1rem;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  .column-two {
    position: relative;

    max-width: 600px;
    margin: 0 auto;

    &::after {
      background-color: ${({ theme }) => theme.accent.secondary};
      bottom: 0;
      content: "";
      height: 100%;
      left: 10px;
      position: absolute;
      right: 0;
      top: 10px;
      width: 80%;
      border-radius: 3px;
      z-index: -1;

      @media (min-width: 768px) {
        left: 40px;
      }
    }
    .image {
      width: 100%;
      border-radius: 1px;
      max-width: 100%;
      object-fit: contain;
    }
  }
`;

const Director: React.FC<Props> = () => {
  return (
    <section className="container">
      <Wrapper>
        <div className="column-one">
          <h2 className="heading">
            Director&rsquo;s <span className="accent">Corner</span>
          </h2>
          <div className="content">
            <p>
              It is my privilege to present before you the Institute of
              Technology and Management, GIDA, Gorakhpur, the institute which
              has attained the insignia of Professional and Proficient with a
              Difference. Over the years, the ITM has evolved to reach and hold
              a unique position of pride in the technical education system in
              eastern UP, the area which had been so far considered to be on the
              lower rung of socio-economic development.
            </p>
            <p>
              We at ITM has been able to contribute immensely to the society by
              churning out large munbers of academically strong and
              industry-ready fresh professional talent, year after year. Today
              the world is going through a metamorphosis in socio-economic
              milieu. In this ever changing environment when the value system is
              fast deteriorating the world needs professionals who can build
              ethical and value based systems.
            </p>
            <p>
              We at ITM have been able to produce professionals who believe in
              values and contribute immensely to the wellbeing of the society.
            </p>
          </div>
        </div>
        <div className="column-two">
          <Image
            alt=""
            src="/images/director.png"
            height={400}
            width={200}
            className="image"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Director;
