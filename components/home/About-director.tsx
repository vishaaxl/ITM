import Image from "next/image";
import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";

// local
import { AccentLineLong } from "../global/Accents";
import { Button, ButtonOutline } from "../global/Buttons";

interface Props {}

const Wrapper = styled.div`
  padding: 2rem 0;

  .container {
    display: grid;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 1.15fr 1fr;
      padding: 0rem 0 2rem 0;
      margin-top: -5rem;
    }
  }

  .content {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 1rem;
    }

    .image {
      display: flex;
      justify-content: center;

      iframe {
        height: 200px;
        width: 100%;

        @media (min-width: 425px) {
          height: 300px;
        }

        @media (min-width: 768px) {
          height: 200px;
        }
      }

      img {
        object-fit: contain;
        max-width: 100%;
      }
    }

    .main {
      height: 100%;
      p {
        color: ${({ theme }) => theme.light};
        line-height: 1.6;
        font-size: 0.9rem;
        text-align: justify !important;
      }

      .buttons {
        padding: 1rem 0;
        gap: 0.75rem;
        display: flex;
      }
    }
  }
`;

const ColumnHeading = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;

  .accent {
    color: ${({ theme }) => theme.accent.secondary};
  }
`;

const AboutAndDirector: React.FC<Props> = () => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <div className="container">
        <div className="column-one">
          <ColumnHeading>
            About <span className="accent">ITM</span>
            <AccentLineLong />
          </ColumnHeading>
          <div className="content">
            <div className="main">
              <p>
                The Institute of Technology and Management (ITM, GIDA,
                Gorakhpur) established in July 2001 under the patronage of Shree
                Krishna Educational Society run by a group of socially oriented
                professionals and entrepreneurs. The Institute is located on the
                ...
              </p>
              <div className="buttons">
                <ButtonOutline>Read More</ButtonOutline>
                <Button color={theme.accent.secondary} compact>
                  NewsLetter
                </Button>
              </div>
            </div>
            <div className="image">
              <iframe
                src="https://www.youtube.com/embed/-brhFVxWv7c?autoplay=1&amp;mute=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="column-two">
          <ColumnHeading>
            Director&rsquo;s <span className="accent">Corner</span>
            <AccentLineLong />
          </ColumnHeading>
          <div className="content">
            <div className="main">
              <p>
                It is my privilege to present before you the Institute of
                Technology and Management, GIDA, Gorakhpur, the institute which
                has attained the insignia of Professional and Proficient with a
                Difference. Over the years...
              </p>
              <div className="buttons">
                <ButtonOutline>Read More</ButtonOutline>
              </div>
            </div>
            <div className="image">
              <Image
                className="img"
                src="/images/director.png"
                height={200}
                width={200}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutAndDirector;
