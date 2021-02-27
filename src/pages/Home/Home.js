import styled from 'styled-components';

import { mediaQuery, TABLET, DESKTOP } from '../../constants/breakpoints';

const HomeContainer = styled.div({
    display: 'flex',
    justifyContent: 'center'
})

const Content = styled.div({
    maxWidth: '540px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
});

const Name = styled.h1({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '4rem',
    ' > span:last-child': {
        fontSize: '6rem',
    }
});

const ImageContainer = styled.figure({
    '> img': {
        borderRadius: '75px/100px'
    }
});

//TODO: Fix this, want smaller font on mobile; 2rem laptop
const HobbyContainer = styled.p({
    fontSize: '1.25rem',
    marginTop: '2.625rem',
    textAlign: 'center',
    '.hobby:not(:last-child)::after': {
        content: "'\\00B7'",
        padding: '0 0.3125rem'
    },
    [mediaQuery(`(min-width: ${TABLET})`)]: {
        fontSize: '1.625rem'
    },
    [mediaQuery(`(min-width: ${DESKTOP})`)]: {
        fontSize: '2rem'
    }
});

const ContactContainer = styled.div({
    marginTop: '2rem 1rem',
    '> a': {
        fontSize: '3rem',
        margin: '1.5rem'
    }
});

const Home = props => {
    const { hobbies, links, name, profileImage} = props;
    
    return (
        <HomeContainer>
            <Content>
                <Name>
                    <span>{name.first}</span>
                    <span>{name.last}</span>
                </Name>
                {/* TODO: tag line??? */}
                <ImageContainer>
                    <img src={profileImage.source} alt={profileImage.alt}/>
                </ImageContainer>
                <HobbyContainer>
                    {hobbies.map((hobby, idx) => <span className="hobby" key={idx}>{hobby.description}</span>)}
                </HobbyContainer>
                <ContactContainer>
                    {links.map(item => item.link)}
                </ContactContainer>
            </Content>
        </HomeContainer>
    )
}

export default Home;