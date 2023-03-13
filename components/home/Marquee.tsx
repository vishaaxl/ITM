import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import MarqueeComponent from "react-fast-marquee";

interface Props {}

const MarqueeContent = styled.div`
  padding: 0.25rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  color: ${({ theme }) => theme.secondary};

  .icon {
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

    animation: blink 1s infinite;
  }
`;

const Marquee: React.FC<Props> = () => {
  return (
    <MarqueeComponent
      pauseOnClick={true}
      speed={30}
      gradient={false}
      style={{ background: "#C21717" }}
    >
      <MarqueeContent>
        <AiFillStar className="icon" />
        <span>Registration Open for the New Academic Session 2022-2023</span>
      </MarqueeContent>
      <MarqueeContent>
        <AiFillStar className="icon" />
        <span>Registration Open for the New Academic Session 2022-2023</span>
      </MarqueeContent>
      <MarqueeContent>
        <AiFillStar className="icon" />
        <span>Registration Open for the New Academic Session 2022-2023</span>
      </MarqueeContent>
    </MarqueeComponent>
  );
};
export default Marquee;
