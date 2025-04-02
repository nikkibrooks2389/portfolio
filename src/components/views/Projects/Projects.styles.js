import styled from "styled-components";
import { ViewsWrapper } from "../ViewsWrapper";
import { slideUpFadeIn } from "../../styles/keyframes";
import PageHeader from "../../pageHeader/PageHeader.styles";
import Project from "./Project";
import MFMImage from "../../../assets/images/MFM-screenshot.png";
import MinesweeperImage from "../../../assets/images/minesweeper-screenshot.png";


const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 85%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xsMobile}) {
    padding-top: 120px;
  }
`;

const StyledProjects = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2rem;
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
    url: "https://my-favorite-movie.vercel.app/",
    tagline: "Explore, Discover, and Track: Your Cinema Universe Awaits at 'My Favorite Movies'",
    technologies: ["React", "Javascript", "Styled Components", "The Movie Database API"],
    image: MFMImage
  },
  {
    title: "Minesweeper Master",
    description: "'Minesweeper Master' reimagines the classic Minesweeper game with multiple levels, theme customization, and adjustable grid sizes. Players can choose their challenge level, from beginner to hard, and personalize their gaming experience by changing the theme to suit their preference. The game is equipped with a timer and a mine counter, adding an extra layer of excitement and strategy. What makes 'Minesweeper Master' even more exciting is its leaderboard feature, powered by MongoDB and supported by Node.js and Express, where players can compete for the top spots by completing puzzles quickly and efficiently. Whether you're a seasoned Minesweeper pro or new to the game, 'Minesweeper Master' offers a compelling and customizable experience for all.",
    url: "https://minesweeper-master.vercel.app/",
    tagline: "Challenge, Customize, Conquer: Dive into the Evolved World of 'Minesweeper Master'",
    technologies: ["React", "JavaScript", "Styled Components", "Redux", "Express", "Node.js", "MongoDB"],
    image: MinesweeperImage
  }
]


const Projects = () => (
  <ViewsWrapper>
    <ProjectsContainer>
      <PageHeader>Projects</PageHeader>
      <StyledProjects>
        {projectsDetails.map((project) => {
          return (
            <Project technologiesList={project.technologies} title={project.title} description={project.description} url={project.url} image={project.image} tagLine={project.tagline} />
          )
        })}
      </StyledProjects>
    </ProjectsContainer>
  </ViewsWrapper>
);

export default Projects;