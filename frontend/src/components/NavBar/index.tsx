import { useState } from "react";
import {
    ButtonContainer,
    GitHubButton,
    MobileIcon,
    MobileLink,
    MobileMenu,
    Nav,
    NavContainer,
    NavItems,
    NavLink,
    NavLogo,
    Span,
} from "./NavBarStyledComponents";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { bio } from "../../data/profileData";
import { useTheme } from "styled-components";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const theme = useTheme();

    return (
        <Nav>
            <NavContainer>
                <NavLogo to={"/"}>
                    <DiCssdeck size="3rem" />
                    <Span>Portfolio</Span>
                </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton
                        href={bio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github Profile
                    </GitHubButton>
                </ButtonContainer>
                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink
                            href="#about"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            About
                        </MobileLink>
                        <MobileLink
                            href="#skills"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Skills
                        </MobileLink>
                        <MobileLink
                            href="#experience"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Experience
                        </MobileLink>
                        <MobileLink
                            href="#projects"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Projects
                        </MobileLink>
                        <MobileLink
                            href="#education"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            Education
                        </MobileLink>
                        <GitHubButton
                            style={{
                                padding: "10px 16px",
                                background: `${theme.primary}`,
                                color: "white",
                                width: "max-content",
                            }}
                            href={bio.github}
                            target="_blank"
                        >
                            Github Profile
                        </GitHubButton>
                    </MobileMenu>
                )}
            </NavContainer>
        </Nav>
    );
};

export default NavBar;
