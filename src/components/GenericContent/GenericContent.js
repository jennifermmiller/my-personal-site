import styled from 'styled-components';

const ContentContainer = styled.div({
    maxWidth: '720px',
    ' p': {
        fontSize: '1.25rem'
    },
    ' a': {
        textDecoration: 'underline'
    }
});


const GenericContent = props => {
    const { content } = props;
 
    return (
        <ContentContainer>
            {content.map(c => c.section)}
        </ContentContainer>
    )
}

export default GenericContent;