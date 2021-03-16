import { arrayOf, object, shape, string } from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DESKTOP, mediaQueryWithPrint, TABLET } from '../../constants/breakpoints'

const FooterContainer = styled.footer({
  alignItems: 'center',
  bottom: '0',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '1rem',
  width: '100%',
  ' > span': {
    alignItems: 'center',
    display: 'flex',
    lineHeight: '2.25rem',
  },
  [mediaQueryWithPrint(`(min-width: ${TABLET})`)]: {
    position: 'relative',
  },
})

const ContactContainer = styled.div(({ theme }) => ({
  display: 'flex',
  '> a': {
    color: theme.text,
    padding: '0.5rem',
    margin: '0 0.5rem',
  },
  '> a:hover': {
    backgroundColor: theme.iconHoverBg,
    borderRadius: '0.25rem',
    cursor: 'pointer',
  },
  '> a:hover svg': {
    backgroundColor: theme.iconHoverBg,
    color: theme.iconHover,
  },
}))

const CopyrightContainer = styled.div({
  marginTop: '1rem',
  [mediaQueryWithPrint(`(min-width: ${DESKTOP})`)]: {
    marginTop: '0',
    position: 'absolute',
    right: '1rem',
  },
})

const Footer = (props) => {
  const { contactLinks, copyright } = props

  return (
    <FooterContainer>
      <ContactContainer className="footer-links">
        {contactLinks.map((link, index) => (
          <a key={index} href={link.url}>
            <FontAwesomeIcon className="h3" icon={link.icon} title="" />
          </a>
        ))}
      </ContactContainer>
      <CopyrightContainer className="text-small">
        &copy; <span>{copyright}</span>
      </CopyrightContainer>
    </FooterContainer>
  )
}

Footer.propTypes = {
  contactLinks: arrayOf(
    shape({
      icon: object.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
  copyright: string.isRequired,
}

export default Footer
