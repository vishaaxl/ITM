import styled from "styled-components";

// local
import { AccentLine } from "@/utils/global";

interface Props {}

const Wrapper = styled.section`
  position: relative;
  padding: 4rem 0;
  background-image: url("/images/vision.jpg");
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

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .accent-big {
    opcacity: 1;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.accent.secondary};
  }
`;

const Vision: React.FC<Props> = () => {
  return (
    <Wrapper>
      <div className="film" />
      <div className="container">
        <div className="column-one">
          <h2 className="heading">
            <span className="accent">Misson</span>
            <br /> & <br /> <span className="accent">Vision</span> of ITM
            <AccentLine />
          </h2>
          <div className="content">
            <p>
              We at ITM aspire to produce competent technical professionals to
              meet the need of industry and society
            </p>
          </div>
        </div>
        <div className="column-two">
          <span className="accent-big">We look forward to </span>
          <br />
          <br />

          <p>
            <span className="accent-big">1.</span> To impart quality education
            through competent faculties, by providing good infrastructure and
            learning resources to produce technical graduates required by the
            industry and society.
          </p>
          <p>
            <span className="accent-big">2.</span> To inculcate skill-oriented
            education to students and interaction with industry to promote
            individual and team excellence to meet the need of industry.
          </p>
          <p>
            <span className="accent-big">3.</span> To develop self-learning
            ability, professionalism and engineering ethics into students to
            face the challenges ahead.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Vision;
