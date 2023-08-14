import styled from "styled-components";
import { PageContainer } from "./PageContainer.styles";

export const ContactContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const Contact = () => (
  <PageContainer>
    <ContactContainer>
      Contact
    </ContactContainer>
  </PageContainer>
);

export default Contact;