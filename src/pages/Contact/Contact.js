import { arrayOf, element, shape, string } from 'prop-types'
import styled from 'styled-components'

import PageHeader from '../../components/PageHeader'
import GenericContent from '../../components/GenericContent'
import ContactForm from './components/ContactForm'
import PageTitle from '../../components/PageTitle'

const ContactContainer = styled.div({
  maxWidth: '700px',
})

const Contact = (props) => {
  const { content, title } = props

  return (
    <ContactContainer>
      <PageTitle tab="Contact" />
      <PageHeader title={title} />
      <GenericContent content={content} />
      <ContactForm />
    </ContactContainer>
  )
}

Contact.propTypes = {
  content: arrayOf(shape({
    section: element.isRequired
  })).isRequired,
  title: string.isRequired
}

export default Contact
