import { arrayOf, bool, func, object, shape, string } from 'prop-types'
import { useEffect } from 'react'
import styled from 'styled-components'

import Nav from '../Nav'
import { mediaQueries } from '../../constants/breakpoints'
import { SIDE_DRAWER } from '../../constants/zindex'

const SideDrawerContainer = styled.div`
  background: ${({ theme }) => theme.titleBg};
  box-shadow: 0.0625rem 0 0.5rem rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: fixed;
  right: inherit;
  top: 0;
  width: 100%;
  z-index: ${SIDE_DRAWER};

  &.slide-in {
    transition: all 0.5s ease 0s;
  }

  &.slide-out {
    transform: translate3d(-100%, 0, 0);
    transition: all 0.5s ease 0s;
  }

  @media ${mediaQueries.mobile} {
    max-width: 300px;
    width: 75%;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  height: 3.75rem;
  justify-content: flex-end;
`

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`

const mobileSyles = {
  display: 'flex',
  flexFlow: 'column wrap',
  margin: '0',
  paddingLeft: '0',
  width: '100%',
  '> li': {
    lineHeight: '3rem',
  },
  '> li > a': {
    display: 'block',
    paddingBottom: '1rem',
    paddingTop: '1rem',
  },
}

const SideDrawer = (props) => {
  const { handleClose, isOpen, navigation } = props

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => (document.body.style.overflow = 'unset')
  }, [isOpen])

  return (
    <SideDrawerContainer className={isOpen ? 'slide-in' : 'slide-out'}>
      <ButtonContainer>
        <CloseButton className="h3" onClick={handleClose}>
          X
        </CloseButton>
      </ButtonContainer>
      <Nav
        className="side-drawer"
        css={mobileSyles}
        navigation={navigation}
        onNavClick={handleClose}
      />
    </SideDrawerContainer>
  )
}

SideDrawer.propTypes = {
  handleClose: func,
  isOpen: bool,
  navigation: arrayOf(
    shape({
      icon: object,
      label: string.isRequired,
      path: string.isRequired,
    })
  ).isRequired,
}

export default SideDrawer
