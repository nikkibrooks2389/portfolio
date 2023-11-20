import styled from "styled-components";
import { ViewsWrapper } from "../ViewsWrapper";
import { slideUpFadeIn } from "../../styles/keyframes";
import NextPageLink from "../../UI/Links/NextPageLink.style";
import PageHeader from "../../pageHeader/PageHeader.styles";
import Project from "./Project";

const ProjectsContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding-top:150px;
  align-items:center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 85%;   
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    text-align:center;
    align-items:center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    padding-top:120px;
  }
`;

const StyledProjects = styled.div`
font-size: 2.5rem;
margin:2rem 0 3rem 0;
opacity: 0;
transform: translateY(20px); 
animation: ${slideUpFadeIn} 0.5s forwards;
animation-delay: 0.7s;
`


const projectsDetails = [
  {
    title: "My Favorite Movies",
    description: " 'My Favorite Movies' is a web application that utilizes The Movie Database(TMDb) API to provide users with an extensive collection of movie information.Users can search for their favorite movies, access detailed movie descriptions, explore the cast and crew, and even add movies to their personalized watchlist.It's your one-stop destination for discovering, learning about, and keeping track of your favorite films and actors. Explore the world of cinema at your fingertips with 'My Favorite Movies.'",
    url: "https://my-favorite-movie-qve3e9heu-nbrooks89.vercel.app/"
  }
]
const Projects = () => (
  <ViewsWrapper>
    <ProjectsContainer>
      <PageHeader>Projects</PageHeader>
      <StyledProjects>
        {projectsDetails.map((project) => {
          return (
            <Project title={project.title} description={project.description} url={project.url} />
          )
        })}

      </StyledProjects>
      <NextPageLink to="/contact" animationDelay="1s">  Contact Me</NextPageLink>
    </ProjectsContainer>
  </ViewsWrapper>
);

export default Projects;