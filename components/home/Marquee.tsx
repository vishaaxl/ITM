import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

interface Props {}

const MarqueeWrapper = styled.div`
  background-color: ${({ theme }) => theme.accent.secondary};
  color: ${({ theme }) => theme.secondary};

  padding: 0.5rem 0;
  font-weight: 600;
  font-size: 0.9rem;

  .marquee-content {
    overflow: hidden;
    width: 100%;

    .icon {
      position: relative;
      top: 0.15rem;
      margin: 0 0.5rem;
      animation: blink 1s infinite;
    }

    .marquee-inner {
      width: fit-content;
      white-space: nowrap;

      span {
        cursor: pointer;
      }
    }
  }

  .marquee-content p {
    animation: marquee-right-to-left 50s linear infinite;
  }

  @keyframes marquee-right-to-left {
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Marquee: React.FC<Props> = () => {
  return (
    <MarqueeWrapper>
      <div className="marquee-content">
        <p className="marquee-inner">
          <AiFillStar className="icon" />
          <span>Registration Open for the New Academic Session 2022-2023</span>
          <AiFillStar className="icon" />
          <span>
            ATTENTION 2021-22 PASSOUT STUDENT: SPECIAL CARY OVER PAPER SESSION
            2021-22
          </span>
        </p>
      </div>
    </MarqueeWrapper>
  );
};
export default Marquee;
