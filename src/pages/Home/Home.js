import styled from 'styled-components'

import PageTitle from '../../components/PageTitle'
import { mediaQuery, DESKTOP, TABLET } from '../../constants/breakpoints'

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
  fontSize: '4rem',
  ' > span:last-child': {
    fontSize: '6rem',
  },
})

const ImageContainer = styled.figure({
  '> img': {
    borderRadius: '75px/100px',
  },
})

const HobbyContainer = styled.p({
  fontSize: '1.25rem',
  marginTop: '2.625rem',
  textAlign: 'center',
  '.hobby:not(:last-child)::after': {
    content: '\'\\00B7\'',
    padding: '0 0.3125rem',
  },
  [mediaQuery(`(min-width: ${TABLET})`)]: {
    fontSize: '1.625rem',
  },
  [mediaQuery(`(min-width: ${DESKTOP})`)]: {
    fontSize: '2rem',
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
          <span>{name.last}</span>
        </Name>
        <ImageContainer>
          <img alt={profileImage.alt} src={profileImage.source} />
        </ImageContainer>
        <HobbyContainer>
          {hobbies.map((hobby, index) => (
            <span className="hobby" key={index}>
              {hobby.description}
            </span>
          ))}
        </HobbyContainer>
      </Content>
    </HomeContainer>
  )
}

export default Home
