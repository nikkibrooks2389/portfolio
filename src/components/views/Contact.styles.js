import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";

export const ContactContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const Contact = () => (
  <ViewsWrapper>
    <ContactContainer>
      Contact
    </ContactContainer>
  </ViewsWrapper>
);

export default Contact;