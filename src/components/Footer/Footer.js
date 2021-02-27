import styled from 'styled-components';

const FooterContainer = styled.footer({
    padding: '1rem',
    textAlign: 'center'
})
// TODO: Add Styling?
const Footer = props => {
    const {content} = props;

    return (
        <FooterContainer>{content}</FooterContainer>
    )
};

export default Footer;