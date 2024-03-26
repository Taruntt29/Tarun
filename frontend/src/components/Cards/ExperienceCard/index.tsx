import React from "react";
import {
    Body,
    Card,
    Company,
    Date,
    Description,
    Document,
    Image,
    ItemWrapper,
    Role,
    Skill,
    Skills,
    Span,
    Top,
} from "./ExperienceCardStyledComponents";

const ExperienceCard = (props: any) => {
    const { experience } = props;
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && <Span>{experience?.desc}</Span>}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map(
                                    (skill: any, index: number) => (
                                        <Skill key={index}>• {skill}</Skill>
                                    )
                                )}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    );
};

export default ExperienceCard;