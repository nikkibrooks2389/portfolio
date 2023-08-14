import styled from "styled-components";
import { PageContainer } from "./PageContainer.styles";

export const HomeContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const Home = () => (
    <PageContainer>
        <HomeContainer>
            Home
        </HomeContainer>
    </PageContainer>
);

export default Home;