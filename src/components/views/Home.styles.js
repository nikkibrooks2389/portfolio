import styled from "styled-components";
import { ViewsWrapper } from "./ViewsWrapper";

export const HomeContainer = styled.div`
  text-align: center;
  font-weight: bold;
`;



const Home = () => (
    <ViewsWrapper>
        <HomeContainer>
            Home
        </HomeContainer>
    </ViewsWrapper>
);

export default Home;