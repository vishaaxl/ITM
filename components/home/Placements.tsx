import Image from "next/image";
import styled from "styled-components";

interface Props {}

const Wrapper = styled.div`
  padding: 3rem 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M461.46 589.73C639.29 551.56 716.38 88.97 987.35 87.01 1258.32 85.05 1368.75 322.17 1513.24 327.81' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M439.33 580.36C590.86 565.51 659.41 260.4 946.81 243.61 1234.2 226.82 1317.3 40.35 1454.28 36.41' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M987.15 573.53C1109.23 548.12 1134.9 251.66 1350.37 231.69 1565.84 211.72 1617.26 104.78 1713.59 102.89' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M277.24 578.94C465.38 565.52 597.99 200.93 929.6 199.95 1261.21 198.97 1415.16 339.17 1581.96 339.95' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M697.62 567.5C793.52 538.57 724.78 288.77 960.84 265.42 1196.9 242.07 1344.32 46.01 1487.27 41.42' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: bottom right;

  @media (min-width: 425px) {
    background-position: center center;
  }

  @media (min-width: 767px) {
    padding: 5rem 0;
  }

  .heading {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.accent.primary};

    .accent {
      color: ${({ theme }) => theme.accent.secondary};
    }

    @media (min-width: 768px) {
      text-align: center;
      font-size: 3rem;
    }
  }

  .content {
    p {
      color: ${({ theme }) => theme.light};
      line-height: 1.6;
      margin-bottom: 1rem;
      text-align: justify;
      text-justify: inter-word;

      @media (min-width: 768px) {
        max-width: 80%;
        margin: 0 auto;
      }
    }
  }

  .column-two {
    padding-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    overflow: scroll;

    @media (min-width: 425px) {
      justify-content: space-around;
    }

    .image {
      object-fit: contain;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
    }
  }
`;

const Placements: React.FC<Props> = () => {
  return (
    <section className="container">
      <Wrapper>
        <div className="column-one">
          <h2 className="heading">
            Placement <span className="accent">Records</span>
          </h2>
          <div className="content">
            <p>
              The Institute has emerged over the years as a leading centre of
              education in the field of Engineering, Pharmacy and Management. We
              provide our students a new era for their carrers. Students from
              ITM have been placed in some of the most reputated public and
              government organizations of India.
            </p>
          </div>
        </div>
        <div className="column-two">
          <Image
            className="image"
            height={120}
            width={120}
            src="/images/placements/wipro.webp"
            alt=""
          />
          <Image
            className="image"
            height={120}
            width={120}
            src="/images/placements/infosys.webp"
            alt=""
          />
          <Image
            className="image"
            height={120}
            width={120}
            src="/images/placements/tata.webp"
            alt=""
          />
          <Image
            className="image"
            height={120}
            width={120}
            src="/images/placements/amazon_img.png"
            alt=""
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Placements;
