import { arrayOf, element, shape } from 'prop-types'
import styled from 'styled-components'

const ContentContainer = styled.div({
  maxWidth: '720px',
  ' p': {
    fontSize: '1.25rem',
  },
})

const GenericContent = (props) => {
  const { content } = props

  return <ContentContainer>{content.map((c) => c.section)}</ContentContainer>
}

GenericContent.propTypes = {
  content: arrayOf(
    shape({
      section: element.isRequired,
    })
  ),
}

export default GenericContent
