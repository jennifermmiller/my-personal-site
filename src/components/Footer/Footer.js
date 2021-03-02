import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { mediaQuery, MOBILE, MOBILE_SM } from '../../constants/breakpoints';

// TODO: Add Styling?
//      - hover state to links... need to decide on color palette
//      - different color than body?
const FooterContainer = styled.footer({
    alignItems: 'center',
    bottom: '0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem',
    width: '100%',
    ' > .divider': {
        display: 'none'
    },
    ' > span': {
        alignItems: 'center',
        display: 'flex',
        lineHeight: '2.25rem'
    },
    [mediaQuery(`(min-width: ${MOBILE_SM})`)]: {
        ' .divider': {
            display: 'block',
            fontSize: '1.75rem',
            marginLeft: '1rem',
            marginRight: '1rem',
        }
    },
    [mediaQuery(`(min-width: ${MOBILE})`)]: {
        justifyContent: 'flex-end',
        textAlign: 'left'
    }
})

const ContactContainer = styled.div(({ theme }) => ({
    '> a': {
        fontSize: '2rem',
        margin: '0 0.5rem',
        padding: '0.5rem'
    },
    '> a:hover': {
        backgroundColor: theme.text,
        borderRadius: '0.25rem',
        cursor: 'pointer'
    },
    '> a:hover svg': {
        color: '#fff' //TODO: add variable
    }    
}));

const Footer = props => {
    const { copyright, contactLinks } = props;

    return (
        <FooterContainer>
            <ContactContainer>
                {contactLinks.map((link, index) => (
                    <a key={index} href={link.url}>
                        <FontAwesomeIcon icon={link.icon} title={link.iconTitle} />
                    </a>
                ))}
            </ContactContainer>
            <span className="divider">|</span>
            {copyright}
        </FooterContainer>
    )
};

export default Footer;