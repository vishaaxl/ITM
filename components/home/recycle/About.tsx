/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

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
    /* grid-template-columns: 2fr 2fr; */
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

  .gallery-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .gallery-img {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
    }
  }

  .gallery-inner {
    width: 100%;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);

      .gallery-img {
        &:nth-child(n + 7) {
          display: none;
        }
      }
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);

      .gallery-img {
        &:nth-child(n + 5) {
          display: none;
        }
      }
    }
  }

  .link-to-gallery {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.accent.primary};
    font-weight: 700;

    &:hover {
      .arrow {
        animation: arrow 1s linear infinite;
      }
    }

    .arrow {
      font-size: 1.5rem;
      animation: arrow 2s linear infinite;
    }
  }

  @keyframes arrow {
    0% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-5px);
    }
  }
`;

const About: React.FC<Props> = () => {
  return (
    <section className="container">
      <Wrapper>
        <div className="column-one">
          <h2 className="heading">
            About <span className="accent">ITM</span>
          </h2>
          <div className="content">
            <p>
              The Institute of Technology and Management (ITM, GIDA, Gorakhpur)
              established in July 2001 under the patronage of Shree Krishna
              Educational Society run by a group of socially oriented
              professionals and entrepreneurs. The Institute is located on the
              Gorakhpur-Lucknow National Highways at a distance of about 12 kms
              from Gorakhpur city which is well connected by road and rail and
              limited airways with all major cities of India .
            </p>
            <p>
              Initially, B.Tech in four branches namely ECE ,CSE, IT, & ME and
              MCA courses were started. Later on, the Institute extended its
              scope of teaching by opening Bachelor of Pharmacy, Master of
              Business Administration and B.TECH in Civil Engineering.Mission &
              Vision of ITM
            </p>
          </div>
        </div>
        <div className="gallery-wrapper">
          <div className="gallery-inner">
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in/assets/site/images/blog_img.webp"
                alt=""
              />
            </div>
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in/assets/site/images/blog_img1.webp"
                alt=""
              />
            </div>
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in//assets/images/banner/pharma.jpg"
                alt=""
              />
            </div>
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in/assets/site/images/blog_img.webp"
                alt=""
              />
            </div>
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in/assets/site/images/blog_img1.webp"
                alt=""
              />
            </div>
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in//assets/images/banner/pharma.jpg"
                alt=""
              />
            </div>
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in/assets/site/images/blog_img1.webp"
                alt=""
              />
            </div>
            <div className="gallery-img">
              <img
                src="https://itmgkp.edu.in//assets/images/banner/pharma.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="link-to-gallery">
          <span>View Gallery</span>
          <BsArrowRight className="arrow" />
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
