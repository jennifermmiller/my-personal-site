import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

import PageTitle from '../../components/PageTitle'

const HomeContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
})

const Content = styled.div({
  maxWidth: '540px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const Name = styled.h1({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
})

const ImageContainer = styled.figure({
  '> img': {
    borderRadius: '75px/100px',
  },
})

const HobbyContainer = styled.p({
  textAlign: 'center',
  '.hobby:not(:last-child)::after': {
    content: "'\\00B7'",
    padding: '0 0.3125rem',
  },
})

const Home = (props) => {
  const { hobbies, name, profileImage } = props

  return (
    <HomeContainer>
      <PageTitle />
      <Content>
        <Name>
          <span>{name.first}</span>
          <span className="text-xxl">{name.last}</span>
        </Name>
        <ImageContainer>
          <img alt={profileImage.alt} src={profileImage.source} />
        </ImageContainer>
        <HobbyContainer>
          {hobbies.map((hobby, index) => (
            <span className="hobby h4" key={index}>
              {hobby.description}
            </span>
          ))}
        </HobbyContainer>
      </Content>
    </HomeContainer>
  )
}

Home.propTypes = {
  hobbies: arrayOf(
    shape({
      description: string,
    })
  ).isRequired,
  name: shape({
    first: string.isRequired,
    last: string.isRequired,
  }).isRequired,
  profileImage: shape({
    alt: string.isRequired,
    source: string.isRequired,
  }).isRequired,
}

export default Home
