import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

import {
    Copyright,
    FooterContainer,
    FooterWrapper,
    Logo,
    Nav,
    NavLink,
    SocialMediaIcon,
    SocialMediaIcons,
} from "./FooterStyledComponents";
import { bio } from "../../data/profileData";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Tarun Tiwari</Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={bio.facebook} target="display">
                        <FacebookIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={bio.twitter} target="display">
                        <TwitterIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={bio.linkedin} target="display">
                        <LinkedInIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={bio.insta} target="display">
                        <InstagramIcon />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={`tel:${bio.phoneNumber}`} target="display">
        <PhoneIcon />
    </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>&copy; 2023.&nbsp;All rights reserved.</Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
