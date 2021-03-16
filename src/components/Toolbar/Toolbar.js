import { useEffect, useState } from 'react'
import { arrayOf, bool, func, object, shape, string } from 'prop-types'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import DrawerToggleButton from '../DrawerToggleButton'
import ThemeToggleButton from '../ThemeToggleButton'
import Nav from '../Nav'
import { TABLET } from '../../constants/breakpoints' // TODO: only need number for resize event
import SideDrawer from '../SideDrawer'
import Backdrop from '../Backdrop'
import useDocumentScrollThrottled from '../../hooks/useDocumentScrollThrottle'

const MINIMUM_SCROLL = 80
const TIMEOUT_DELAY = 400

const Header = styled.header`
  align-items: stretch;
  animation: drop-1 ease 1.5s;
  background-color: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) => `0 2px 2px -2px ${theme.border}`};
  display: flex;
  height: 60px;
  justify-content: space-between;
  left: 0;
  padding-right: 1rem;
  position: sticky;
  opacity: 0.9;
  top: 0;
  transform: translateY(0);
  transition: transform 0.3s ease;
  width: 100%;
  z-index: 500;
  &.hidden {
    transform: translateY(-110%);
  }
`

const NavigationContainer = styled.div`
  flex-grow: 2;
`

const ButtonContainer = styled.div`
  align-self: center;
`

const navItemStyles = {
  display: 'flex',
  height: '100%',
  paddingLeft: '0',
  margin: '0',
  ' li': {
    display: 'flex',
  },
  ' li > a ': {
    alignItems: 'center',
    display: 'flex',
  },
}

const Toolbar = (props) => {
  const { handleThemeClick, navigation, theme } = props
  const isMobile = useMediaQuery({ query: `(max-width: ${TABLET})` })
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)

  const handleDrawerClick = () => setIsDrawerOpen((drawOpen) => !drawOpen)
  const handleDrawerClose = () => setIsDrawerOpen(false)

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <>
      <Header className={hideHeader && 'hidden'}>
        {isMobile && (
          <ButtonContainer>
            <DrawerToggleButton isOpen={isDrawerOpen} toggleDrawer={handleDrawerClick} />
          </ButtonContainer>
        )}
        <div className="spacer" />
        {!isMobile && (
          <NavigationContainer className="navigation-items">
            <Nav css={navItemStyles} navigation={navigation} />
          </NavigationContainer>
        )}
        <div className="spacer" />
        <ButtonContainer>
          <ThemeToggleButton toggleTheme={handleThemeClick} theme={theme} />
        </ButtonContainer>
      </Header>
      {isMobile && (
        <SideDrawer isOpen={isDrawerOpen} navigation={navigation} handleClose={handleDrawerClose} />
      )}
      {isMobile && isDrawerOpen && <Backdrop handleBackdropClick={handleDrawerClose} />}
    </>
  )
}

Toolbar.propTypes = {
  handleDrawerClick: func.isRequired,
  handleThemeClick: func.isRequired,
  isMobile: bool,
  isDrawerOpen: bool,
  navigation: arrayOf(
    shape({
      icon: object,
      label: string.isRequired,
      path: string.isRequired,
    })
  ).isRequired,
  theme: string.isRequired,
}

export default Toolbar
