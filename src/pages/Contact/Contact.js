import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';
import GenericContent from '../../components/GenericContent';
import ContactForm from './components/ContactForm';

const ContactContainer = styled.div({
    maxWidth: '720px',
});

// TODO: Add a picture to fill up some space?

const Contact = props => {
    const { content, title } = props;
    return (
        <ContactContainer>
            <PageTitle title={title}/>
            <GenericContent content={content}/>
            <ContactForm/>
        </ContactContainer>
    )
}

export default Contact;