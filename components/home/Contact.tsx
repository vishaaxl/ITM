import { Form, Formik } from "formik";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

// local
import Input from "../Input";
import { Button } from "../global/Buttons";
import { AccentLine } from "../global/Accents";
import { Background } from "../global/Backgrounds";

interface Props {}

const ContactWrapper = styled.section`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
    .container {
      display: grid;
      grid-template-columns: 2fr 3fr;
    }
  }

  .column-one {
    h2 {
      font-size: 2rem;
      font-weight: 700;

      @media (min-width: 425px) {
        font-size: 2.5rem;
      }
    }

    .fade {
      opacity: 0.5;
      font-size: 0.9rem;
      display: block;
      margin-bottom: 1.5rem;
    }
  }
`;

const TwoColumn = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`;

const Contact: React.FC<Props> = () => {
  const theme = useContext(ThemeContext);
  return (
    <Background dark>
      <ContactWrapper>
        <div className="container">
          <div className="column-one">
            <h2>
              Get Your <br />
              Query Answered
            </h2>
            <AccentLine color={theme.accent.tertiary} />
            <span className="fade">
              Submit your query and we will contact you soon.
            </span>
          </div>
          <Formik
            initialValues={{}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <TwoColumn>
                <Input name="name" placeholder="Name" hidelabel />
                <Input name="email" placeholder="Email" hidelabel />
              </TwoColumn>
              <Input
                name="Message"
                placeholder="Message"
                hidelabel
                component="textarea"
                rows={3}
              />

              <Button color={theme.accent.tertiary}>Submit Query</Button>
            </Form>
          </Formik>
        </div>
      </ContactWrapper>
    </Background>
  );
};

export default Contact;
