import PageTitle from '../../components/PageTitle';
import GenericContent from '../../components/GenericContent';

const About = props => {
    const { content, title } = props;
 
    return (
        <>
            <PageTitle title={title}/>
            <GenericContent content={content}/>
        </>
    )
}

export default About;