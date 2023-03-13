import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

interface Props {}

const HeroWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 80vh;

  @media (min-width: 767px) {
    height: 50vh;
  }

  @media (min-width: 1024px) {
    height: 100vh;
  }

  .film {
    z-index: 1;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      0deg,
      rgba(25, 255, 255, 0.01) 0%,
      rgba(3, 9, 66, 0.5) 100%
    );
  }

  .embla {
    overflow: hidden;
    height: 100%;

    .embla__container {
      display: flex;
      height: 100%;

      .embla__slide {
        flex: 0 0 100%;

        .sliding-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

const Hero: React.FC<Props> = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <>
      <HeroWrapper>
        <div className="film"></div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <Image
                unoptimized
                src="/images/banner.jpg"
                height={200}
                width={200}
                alt=""
                className="sliding-image"
              />
            </div>
            <div className="embla__slide">
              <Image
                unoptimized
                src="/images/achivement_bg.jpg"
                height={200}
                width={200}
                alt=""
                className="sliding-image"
              />
            </div>
            <div className="embla__slide">
              <Image
                unoptimized
                src="/images/banner.jpg"
                height={200}
                width={200}
                alt=""
                className="sliding-image"
              />
            </div>
          </div>
        </div>
      </HeroWrapper>
    </>
  );
};

export default Hero;
