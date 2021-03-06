import { arrayOf, element, shape, string } from 'prop-types'
import styled from 'styled-components'

import PageHeader from '../../components/PageHeader/'
import GenericContent from '../../components/GenericContent'
import PageTitle from '../../components/PageTitle'

const AboutContainer = styled.div({
  maxWidth: '700px',
  '@media print': {
    ' a[href^=http]:after': {
      content: ' <" attr(href) "> ',
    },
  },
})

const About = (props) => {
  const { content, title } = props

  return (
    <AboutContainer>
      <PageTitle tab="About" />
      <PageHeader title={title} />
      <GenericContent content={content} />
    </AboutContainer>
  )
}

About.propTypes = {
  content: arrayOf(
    shape({
      section: element.isRequired,
    })
  ).isRequired,
  title: string.isRequired,
}

export default About
