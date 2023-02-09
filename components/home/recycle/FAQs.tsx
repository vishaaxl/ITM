import styled from "styled-components";
import { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";

// local
import { Background } from "./Admission";

interface Props {}
interface FaqProps {
  accent: boolean;
}

const Wrapper = styled.div`
  padding: 3rem 0;

  span {
    display: block;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }

  .column-one {
    padding: 0 1rem;
    @media (min-width: 768px) {
      margin-top: 4rem;
    }

    .line-one {
      color: ${({ theme }) => theme.accent.tertiary};
      font-weight: 700;
      letter-spacing: 2px;
    }

    .line-two {
      color: ${({ theme }) => theme.primary};

      font-weight: 800;
      font-size: 1.75rem;

      @media (min-width: 425px) {
        font-size: 3.125rem;
        line-height: 1.2;
      }
    }

    p {
      color: ${({ theme }) => theme.light};
      margin-bottom: 2rem;
      font-size: 0.9rem;

      @media (min-width: 425px) {
        max-width: 80%;
        font-size: 1rem;
      }

      @media (min-width: 768px) {
        max-width: 100%;
        margin-top: 1rem;
      }
    }

    .link {
      cursor: pointer;
      color: ${({ theme }) => theme.accent.tertiary};
      text-decoration: underline;
      display: inline-block;
    }
  }
`;

const Faq = styled.div<FaqProps>`
  margin-bottom: 1rem;
  line-height: 1.6;

  .question {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: ${({ theme, accent }) =>
      accent ? theme.accent.secondary : theme.secondary};
    color: ${({ theme, accent }) => (accent ? theme.secondary : theme.primary)};

    padding: 0.75rem;
    font-weight: 600;
    font-size: 0.9rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 425px) {
      font-size: 1rem;
      padding: 1rem;
    }

    span {
      max-width: 90%;
    }

    .icon {
      color: ${({ theme, accent }) => (accent ? theme.secondary : theme.light)};
      font-size: 1.25rem;
    }
  }

  .answer {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.light};

    height: 0;
    overflow: hidden;

    p {
      padding: 1.25rem 0.5rem;

      font-size: 0.9rem;

      @media (min-width: 425px) {
        padding: 2rem 1rem;
        font-size: 1rem;
      }
    }
  }
`;

const FAQs: React.FC<Props> = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  return (
    <Background dark={false}>
      <section className="container">
        <Wrapper>
          <div className="column-one">
            <span className="line-one">FAQ</span>
            <span className="line-two">
              Frequently Asked
              <br /> Questions.
            </span>
            <p>
              Can&rsquo;t find the answer you are looking for? You can ask your
              question <span className="link">here</span>.
            </p>
          </div>
          <div className="column-two">
            <Faq
              onClick={() => setActiveQuestion(0)}
              accent={activeQuestion == 0}
            >
              <div className="question">
                <span>
                  Whom to contact for Postgraduate admissions? Whom to contact
                  for Postgraduate admissions?
                </span>
                {activeQuestion == 0 ? (
                  <FaChevronCircleUp className="icon" />
                ) : (
                  <FaChevronCircleDown className="icon" />
                )}
              </div>
              <motion.div
                className="answer"
                initial={{ height: 0 }}
                animate={{
                  height: activeQuestion == 0 ? "100%" : "0",
                  transition: {
                    times: [0.17, 0.67, 0.43, 0.96],
                  },
                }}
              >
                <p>
                  At quisque libero enim fusce neque aliquet id facilisis
                  letius. Consequat felis habitasse potenti inceptos vitae
                  ligula interdum mi litora scelerisque morbi.
                  <br />
                  <br /> Arcu tempus ad urna convallis malesuada dictumst mollis
                  adipiscing potenti nunc aenean.
                </p>
              </motion.div>
            </Faq>
            <Faq
              onClick={() => setActiveQuestion(1)}
              accent={activeQuestion == 1}
            >
              <div className="question">
                <span>
                  Whom to contact for Postgraduate admissions? Whom to contact
                  for Postgraduate admissions?
                </span>
                {activeQuestion == 1 ? (
                  <FaChevronCircleUp className="icon" />
                ) : (
                  <FaChevronCircleDown className="icon" />
                )}
              </div>
              <motion.div
                className="answer"
                initial={{ height: 0 }}
                animate={{
                  height: activeQuestion == 1 ? "100%" : "0",
                  transition: {
                    times: [0.17, 0.67, 0.43, 0.96],
                  },
                }}
              >
                <p>
                  At quisque libero enim fusce neque aliquet id facilisis
                  letius. Consequat felis habitasse potenti inceptos vitae
                  ligula interdum mi litora scelerisque morbi.
                  <br />
                  <br /> Arcu tempus ad urna convallis malesuada dictumst mollis
                  adipiscing potenti nunc aenean.
                </p>
              </motion.div>
            </Faq>
            <Faq
              onClick={() => setActiveQuestion(2)}
              accent={activeQuestion == 2}
            >
              <div className="question">
                <span>
                  Whom to contact for Postgraduate admissions? Whom to contact
                  for Postgraduate admissions?
                </span>
                {activeQuestion == 2 ? (
                  <FaChevronCircleUp className="icon" />
                ) : (
                  <FaChevronCircleDown className="icon" />
                )}
              </div>
              <motion.div
                className="answer"
                initial={{ height: 0 }}
                animate={{
                  height: activeQuestion == 2 ? "100%" : "0",
                  transition: {
                    times: [0.17, 0.67, 0.43, 0.96],
                  },
                }}
              >
                <p>
                  At quisque libero enim fusce neque aliquet id facilisis
                  letius. Consequat felis habitasse potenti inceptos vitae
                  ligula interdum mi litora scelerisque morbi.
                  <br />
                  <br /> Arcu tempus ad urna convallis malesuada dictumst mollis
                  adipiscing potenti nunc aenean.
                </p>
              </motion.div>
            </Faq>
            <Faq
              onClick={() => setActiveQuestion(3)}
              accent={activeQuestion == 3}
            >
              <div className="question">
                <span>
                  Whom to contact for Postgraduate admissions? Whom to contact
                  for Postgraduate admissions?
                </span>
                {activeQuestion == 3 ? (
                  <FaChevronCircleUp className="icon" />
                ) : (
                  <FaChevronCircleDown className="icon" />
                )}
              </div>
              <motion.div
                className="answer"
                initial={{ height: 0 }}
                animate={{
                  height: activeQuestion == 3 ? "100%" : "0",
                  transition: {
                    times: [0.17, 0.67, 0.43, 0.96],
                  },
                }}
              >
                <p>
                  At quisque libero enim fusce neque aliquet id facilisis
                  letius. Consequat felis habitasse potenti inceptos vitae
                  ligula interdum mi litora scelerisque morbi.
                  <br />
                  <br /> Arcu tempus ad urna convallis malesuada dictumst mollis
                  adipiscing potenti nunc aenean.
                </p>
              </motion.div>
            </Faq>
          </div>
        </Wrapper>
      </section>
    </Background>
  );
};

export default FAQs;
