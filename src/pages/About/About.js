import styled from 'styled-components';

import PageHeader from '../../components/PageHeader/';
import GenericContent from '../../components/GenericContent';
import PageTitle from '../../components/PageTitle';

const AboutContainer = styled.div({
    maxWidth: '700px'
});

const About = props => {
    const { content, title } = props;
 
    return (
        <AboutContainer>
            <PageTitle tab="About"/>
            <PageHeader title={title}/>
            <GenericContent content={content}/>
        </AboutContainer>
    );
};

export default About;