/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

// local
import PageHeading from "@/components/global/PageHeading";
import { AccentLineLong } from "@/components/global/Accents";

const Wrapper = styled.section`
  padding-bottom: 2rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M461.46 589.73C639.29 551.56 716.38 88.97 987.35 87.01 1258.32 85.05 1368.75 322.17 1513.24 327.81' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M439.33 580.36C590.86 565.51 659.41 260.4 946.81 243.61 1234.2 226.82 1317.3 40.35 1454.28 36.41' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M987.15 573.53C1109.23 548.12 1134.9 251.66 1350.37 231.69 1565.84 211.72 1617.26 104.78 1713.59 102.89' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M277.24 578.94C465.38 565.52 597.99 200.93 929.6 199.95 1261.21 198.97 1415.16 339.17 1581.96 339.95' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M697.62 567.5C793.52 538.57 724.78 288.77 960.84 265.42 1196.9 242.07 1344.32 46.01 1487.27 41.42' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: center center;

  .content {
    color: ${({ theme }) => theme.light};
    font-weight: 500;
    font-size: 0.95rem;
    text-align: justify;
    text-justify: inter-word;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;

    @media (min-width: 425px) {
      font-size: 3rem;
    }

    @media (min-width: 767px) {
      font-size: 3.25rem;
    }

    .accent {
      color: ${({ theme }) => theme.accent.secondary};
    }
  }
`;

export const Grid = styled.div`
  img {
    box-shadow: ${({ theme }) => theme.shadowSecondary};
    object-fit: cover;
    width: 100%;
    height: 100%;

    @media (max-width: 900px) {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .column-one {
      flex: 3;
    }
    .column-two {
      flex: 2.5;

      display: grid;
      grid-template-rows: 1fr 1.5fr;
      gap: 1rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <PageHeading title="About Us" />
      <Wrapper>
        <div className="container">
          <h1>
            Welcome to <span className="accent">ITM</span>
          </h1>
          <AccentLineLong />

          <Grid>
            <div className="column-one">
              <img
                src="https://itmgkp.edu.in/assets/site/images/about_img5.webp"
                alt=""
              />
            </div>
            <div className="column-two">
              <img
                src="https://itmgkp.edu.in/assets/site/images/about/About-us-min.webp"
                alt=""
              />
              <p className="content">
                The Institute of Technology and Management (ITM, GIDA,
                Gorakhpur) started functioning in July 2001 under the patronage
                of Shree Krishna Educational Society run by a group of socially
                oriented professionals and entrepreneurs.
                <br />
                <br /> The Institute is located on the Gorakhpur-Lucknow
                National Highways at a distance of about 12 kms from Gorakhpur
                city which is well connected by road and rail and limited
                airways with all major cities of India.
                <br />
                <br /> Initially, B.Tech in four branches namely ECE ,CSE, IT, &
                ME and MCA courses were started. Later on, the Institute
                extended its scope of teaching by opening Bachelor of Pharmacy,
                Master of Business Administration and B.TECH in Civil
                Engineering.
              </p>
            </div>
          </Grid>
          <p className="content">
            Thus, the Institute has emerged over the years as a leading center
            of education in the field of Engineering, Pharmacy and Management.
            The Institute is credited with well equipped labs and other
            infrastructure facilities such as language lab, computerized library
            , conference & seminar halls and hostel & residential facilities
            within the campus.
            <br />
            <br /> The team of highly qualified faculty with a mix of rich
            experience on the part of seniors is the most valuable resource that
            has played a significant role in creating a distinct niche for the
            Institute in the map of technical education of the country.
          </p>
        </div>
      </Wrapper>
    </>
  );
}
