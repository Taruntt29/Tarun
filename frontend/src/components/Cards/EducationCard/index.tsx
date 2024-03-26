import {
    Body,
    Card,
    Date,
    Degree,
    Description,
    Grade,
    Image,
    Name,
    Span,
    Top,
} from "./EducationCardStyledComponents";

const EducationCard = (props: any) => {
    const { education } = props;
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            {education.grade && (
                <Grade>
                    <b>Grade: </b>
                    {education.grade}
                </Grade>
            )}
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    );
};

export default EducationCard;
