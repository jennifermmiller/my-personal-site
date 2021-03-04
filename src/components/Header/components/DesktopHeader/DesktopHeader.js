import styled from 'styled-components'

import Nav from '../../../Nav'
import ToggleThemeButton from '../ToggleThemeButton'

const DesktopHeaderContainer = styled.header(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.body,
  boxShadow: `0 2px 2px -2px ${theme.border}`,
  display: 'flex',
  justifyContent: 'space-between',
  left: '0',
  padding: ' 0 1rem',
  position: 'fixed',
  opacity: '0.9',
  top: '0',
  width: '100%',
  zIndex: '500',
}))

const navItemStyles = {
  display: 'flex',
  paddingLeft: '0',
}

const DesktopHeader = (props) => {
  const { handleThemeClick, navigation, theme } = props

  return (
    <DesktopHeaderContainer className="header">
      <Nav css={navItemStyles} navigation={navigation} />
      <ToggleThemeButton handleThemeClick={handleThemeClick} theme={theme} />
    </DesktopHeaderContainer>
  )
}

export default DesktopHeader
