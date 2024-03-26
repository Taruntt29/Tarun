import { useState } from "react";
import ProjectCard from "../Cards/ProjectCard";
import {
    CardContainer,
    Container,
    Desc,
    Divider,
    Title,
    ToggleButton,
    ToggleButtonGroup,
    Wrapper,
} from "./ProjectsStyledComponents";
import { projects } from "../../data/profileData";

const Projects = (props: any) => {
    const { openModal, setOpenModal } = props;
    const [toggle, setToggle] = useState("all");
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. From web apps to
                    android apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    {toggle === "all" ? (
                        <ToggleButton
                            active={"true"}
                            value="all"
                            onClick={() => setToggle("all")}
                        >
                            All
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            active={"false"}
                            value="all"
                            onClick={() => setToggle("all")}
                        >
                            All
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "web app" ? (
                        <ToggleButton
                            active={"true"}
                            value="web app"
                            onClick={() => setToggle("web app")}
                        >
                            WEB APP'S
                        </ToggleButton>
                    ) : (
                        <ToggleButton
                            active={"false"}
                            value="web app"
                            onClick={() => setToggle("web app")}
                        >
                            WEB APP'S
                        </ToggleButton>
                    )}
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === "all" &&
                        projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
