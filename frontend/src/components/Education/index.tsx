import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
    Container,
    Desc,
    TimelineSection,
    Title,
    Wrapper,
} from "./EducationStyledComponents";
import { education } from "../../data/profileData";
import EducationCard from "../Cards/EducationCard";

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and
                    growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((edu, index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <EducationCard education={edu} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot
                                        variant="outlined"
                                        color="secondary"
                                    />
                                    {index !== education.length - 1 && (
                                        <TimelineConnector
                                            style={{ background: "#854CE6" }}
                                        />
                                    )}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Education;
