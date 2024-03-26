import {
    Avatar,
    Card,
    Date,
    Description,
    Details,
    Image,
    Members,
    Tag,
    Tags,
    Title,
} from "./ProjectCardStyledComponents";

const ProjectCard = (props: any) => {
    const { project, setOpenModal } = props;
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag: any, index: number) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member: any, index: number) => (
                    <Avatar key={index} src={member.img} />
                ))}
            </Members>
        </Card>
    );
};

export default ProjectCard;
