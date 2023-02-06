import { Form, Formik } from "formik";
import styled from "styled-components";

// local
import Input from "../Input";
import { AccentLine } from "@/utils/global";
import { Background, Button } from "./Admission";

interface Props {}

const ContactWrapper = styled.section`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
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
  return (
    <Background dark>
      <ContactWrapper>
        <div className="container">
          <div className="column-one">
            <h2>
              Get Your <br />
              Query Answered
            </h2>
            <AccentLine />
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

              <Button>Submit Query</Button>
            </Form>
          </Formik>
        </div>
      </ContactWrapper>
    </Background>
  );
};

export default Contact;
